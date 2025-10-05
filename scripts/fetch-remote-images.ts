/* eslint-disable no-console */

import axios from "axios";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import * as path from "node:path";
import { remoteFixMap } from "./.generated/remoteDocs";

/**
 * What this script does:
 * - Scans every downloaded markdown file listed in remoteFixMap.documents
 * - Finds image references in markdown (inline + reference-style)
 * - For each RELATIVE image URL (no http/https, no leading "/"):
 *     - Resolves it to a repo-relative path based on the doc's location
 *     - Downloads the image from `${entry.sourceBaseUrl}${repoRelPath}`
 *     - Saves it under the SAME relative path beneath the entry.outDir
 * - IMPORTANT: It DOES NOT rewrite the markdown. We keep the original URLs
 *   so Docusaurus won’t fight us by reformatting paths.
 */

const SITE_ROOT = process.cwd();

/* ---------------------------- helpers ---------------------------- */

function isHttpUrl(u: string): boolean {
  return /^https?:\/\//i.test(u);
}

async function httpGetBinary(url: string): Promise<Buffer | null> {
  try {
    const res = await axios.get<ArrayBuffer>(url, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "remote-images-fetcher" },
      validateStatus: () => true,
    });
    if (res.status === 200) return Buffer.from(res.data);
    if (res.status === 404) return null;
    throw new Error(`HTTP ${res.status}`);
  } catch (e: any) {
    throw new Error(`GET ${url} failed: ${e.message || String(e)}`);
  }
}

// For a markdown doc path (repo-relative to the repo root) and an image URL (relative),
// compute the repo-relative image path (POSIX style).
function repoRelativeFromDoc(docRepoRel: string, imgRel: string): string {
  const docDirPOSIX = path.posix.dirname(docRepoRel);
  const combined = path.posix.normalize(path.posix.join(docDirPOSIX, imgRel));
  return combined.replace(/^\/+/, "");
}

// Find markdown image refs: inline + reference-style
type ImgRef = { url: string };

function extractMarkdownImageUrls(md: string): ImgRef[] {
  const refs: ImgRef[] = [];

  // Inline: ![alt](url "title")
  const inlineRe = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  for (const m of md.matchAll(inlineRe)) {
    refs.push({ url: m[1] });
  }

  // Reference form: ![alt][id] + definition [id]: url "title"
  const imgRefIdRe = /!\[[^\]]*\]\[([^\]]+)\]/g;
  const usedIds = new Set<string>();
  for (const m of md.matchAll(imgRefIdRe)) {
    usedIds.add(m[1]);
  }

  const defRe = /^\[([^\]]+)\]:\s+(\S+)(?:\s+"[^"]*")?\s*$/gm;
  const idToUrl = new Map<string, string>();
  for (const m of md.matchAll(defRe)) {
    idToUrl.set(m[1], m[2]);
  }

  for (const id of usedIds) {
    const u = idToUrl.get(id);
    if (u) refs.push({ url: u });
  }

  return refs;
}

/* ----------------------------- main ----------------------------- */

async function processDoc(
  entry: {
    outDir: string;
    sourceBaseUrl: string;
    documents: string[];
  },
  docRepoRelPath: string
): Promise<number> {
  // Local absolute path to the already-downloaded markdown file
  const mdAbs = resolve(SITE_ROOT, entry.outDir, docRepoRelPath);
  if (!existsSync(mdAbs)) return 0;

  const md = readFileSync(mdAbs, "utf8");
  const refs = extractMarkdownImageUrls(md);
  if (refs.length === 0) return 0;

  let downloads = 0;

  for (const { url } of refs) {
    const rawUrlTxt = url.trim();

    // Skip absolute urls and site-absolute paths (starting with "/")
    if (isHttpUrl(rawUrlTxt) || rawUrlTxt.startsWith("/")) continue;

    // Resolve repo-relative path of the image
    const repoRelImgPath = repoRelativeFromDoc(docRepoRelPath, rawUrlTxt);

    // Remote image URL (we rely on sourceBaseUrl from the generated file)
    const remoteUrl =
      entry.sourceBaseUrl.replace(/\/+$/, "") + "/" + repoRelImgPath;

    // Local absolute save path — MIRROR the repo path inside outDir
    const localAbs = resolve(
      SITE_ROOT,
      entry.outDir,
      ...repoRelImgPath.split("/")
    );

    try {
      const bin = await httpGetBinary(remoteUrl);
      if (!bin) {
        console.warn(`[img] 404 (skip) ${remoteUrl}`);
        continue;
      }
      mkdirSync(dirname(localAbs), { recursive: true });
      writeFileSync(localAbs, bin);
      downloads++;
      // Keep log concise but informative
      console.log(
        `[img] saved ${path.posix.join(entry.outDir, repoRelImgPath)}`
      );
    } catch (e: any) {
      console.warn(`[img] warn ${remoteUrl}: ${e.message}`);
    }
  }

  return downloads;
}

async function run() {
  let total = 0;

  for (const entry of remoteFixMap) {
    // We only need outDir, sourceBaseUrl, and documents from the generated file.
    if (
      !entry ||
      !entry.outDir ||
      !entry.sourceBaseUrl ||
      !Array.isArray(entry.documents)
    ) {
      console.warn(`[img] skip entry (missing fields):`, entry);
      continue;
    }

    const mdDocs = entry.documents.filter((d) => /\.(md|mdx)$/i.test(d));
    if (mdDocs.length === 0) continue;

    console.log(
      `[img] scanning ${entry.outDir} (${mdDocs.length} markdown files)`
    );
    for (const doc of mdDocs) {
      total += await processDoc(entry, doc);
    }
  }

  console.log(`[img] done. total images saved: ${total}`);
}

run().catch((e) => {
  console.error(`[img] fatal: ${e.message}`);
  process.exitCode = 1;
});
