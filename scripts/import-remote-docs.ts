/* eslint-disable no-console */
// scripts/import-remote-docs.ts
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import axios from "axios";
import { remoteFixMap, type RemoteFixEntry } from "./.generated/remoteDocs";

function parseFromSourceBaseUrl(sourceBaseUrl: string): {
  owner: string;
  repo: string;
  branch: string;
} {
  const m = sourceBaseUrl.match(
    /^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/?$/i
  );
  if (!m) {
    throw new Error(
      `Cannot parse owner/repo/branch from sourceBaseUrl: ${sourceBaseUrl}`
    );
  }
  const [, owner, repo, branch] = m;
  return { owner, repo, branch };
}

function rawUrlFrom(entry: RemoteFixEntry, relPath: string): string {
  const { owner, repo, branch } = parseFromSourceBaseUrl(entry.sourceBaseUrl);
  const p = relPath.replace(/^\/+/, "");
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${p}`;
}

async function httpGet(url: string): Promise<Buffer | null> {
  try {
    const res = await axios.get<ArrayBuffer>(url, {
      responseType: "arraybuffer",
      timeout: 20000,
      headers: { "User-Agent": "remote-importer" },
      validateStatus: () => true,
    });
    if (res.status === 200) return Buffer.from(res.data);
    if (res.status === 404) return null;
    throw new Error(`HTTP ${res.status} for ${url}`);
  } catch (e: any) {
    throw new Error(`GET ${url} failed: ${e.message || String(e)}`);
  }
}

const FORCE = process.argv.includes("--force"); // allow manual full refresh

async function run() {
  const root = process.cwd();
  let wrote = 0;
  let skipped = 0;

  for (const entry of remoteFixMap) {
    const destRoot = resolve(root, entry.outDir);
    if (!Array.isArray(entry.documents) || entry.documents.length === 0) {
      console.warn(
        `[import] "${entry.outDir}" has no documents listed — nothing to download.`
      );
      continue;
    }

    console.log(`[import] ${entry.outDir} (${entry.documents.length} files)`);
    for (const rel of entry.documents) {
      const url = rawUrlFrom(entry, rel);
      const abs = resolve(destRoot, rel);

      if (!FORCE && existsSync(abs)) {
        // Do not clobber local edits (like /static/remote rewrites)
        skipped++;
        // console.log(`[import] skip existing ${entry.outDir}/${rel}`);
        continue;
      }

      try {
        const data = await httpGet(url);
        if (!data) {
          skipped++;
          console.warn(`[import] 404 (skip) ${url}`);
          continue;
        }
        mkdirSync(dirname(abs), { recursive: true });
        writeFileSync(abs, data);
        wrote++;
        console.log(`[import] wrote ${entry.outDir}/${rel}`);
      } catch (err: any) {
        skipped++;
        console.warn(`[import] warn ${url}: ${err.message}`);
      }
    }
  }

  console.log(`[import] done. wrote=${wrote}, skipped=${skipped}`);
}

run().catch((e) => {
  console.error(`[import] fatal: ${e.message}`);
  process.exitCode = 1;
});
