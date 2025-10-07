// scripts/repair-remote-markdown.ts
/* eslint-disable no-console */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import * as gen from "./.generated/remoteDocs";

type FixMapEntry = {
  outDir: string;
  sourceBaseUrl: string;
  documents: string[];
};
const remoteFixMap: FixMapEntry[] = (() => {
  const m = (gen as any).remoteFixMap;
  if (Array.isArray(m)) return m;
  const p = (gen as any).remotePlugins;
  if (Array.isArray(p)) {
    return p
      .map((entry: any) => (Array.isArray(entry) ? entry[1] : null))
      .filter(Boolean)
      .map((cfg: any) => ({
        outDir: cfg.outDir,
        sourceBaseUrl: cfg.sourceBaseUrl,
        documents: cfg.documents ?? [],
      }));
  }
  return [];
})();

/**
 * Escape MDX JSX/expressions outside BOTH fenced code blocks (``` or ~~~)
 * AND inline code spans (`...`).
 *
 * We replace: <, >, {, }  ->  &lt; &gt; &#123; &#125;
 */
function escapeMdxTraps(markdown: string): string {
  const chars = Array.from(markdown);
  const n = chars.length;

  let i = 0;
  let inFence = false;
  let fenceMarker = ""; // ``` or ~~~
  let inInline = false; // inside single backtick span `
  let inlineTickCount = 0; // to support ``` inside inline? We'll treat triple separately.
  let fenceColStart = 0;

  // Precompute line starts to help detect fenced blocks
  const lineStarts: number[] = [0];
  for (let j = 0; j < n; j++) {
    if (chars[j] === "\n") lineStarts.push(j + 1);
  }
  lineStarts.push(n);

  // Helper to check if position k is line start
  function isLineStart(k: number): boolean {
    // binary search last index where lineStarts[idx] <= k
    let lo = 0,
      hi = lineStarts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (lineStarts[mid] <= k) lo = mid;
      else hi = mid - 1;
    }
    return lineStarts[lo] === k;
  }

  const out: string[] = [];

  while (i < n) {
    // Handle fenced code block markers at line start
    if (isLineStart(i)) {
      // Match ```lang or ~~~lang
      if (
        !inFence &&
        (markdown.startsWith("```", i) || markdown.startsWith("~~~", i))
      ) {
        inFence = true;
        fenceMarker = markdown.startsWith("```", i) ? "```" : "~~~";
        // write marker as-is until end of line
        const eol = markdown.indexOf("\n", i);
        const end = eol === -1 ? n : eol + 1;
        out.push(markdown.slice(i, end));
        i = end;
        fenceColStart = i;
        continue;
      } else if (inFence && markdown.startsWith(fenceMarker, i)) {
        // closing fence
        const eol = markdown.indexOf("\n", i);
        const end = eol === -1 ? n : eol + 1;
        out.push(markdown.slice(i, end));
        i = end;
        inFence = false;
        fenceMarker = "";
        continue;
      }
    }

    if (inFence) {
      // pass through verbatim until we hit closing fence at a future iteration
      const eol = markdown.indexOf("\n", i);
      if (eol === -1) {
        out.push(markdown.slice(i));
        break;
      } else {
        out.push(markdown.slice(i, eol + 1));
        i = eol + 1;
        continue;
      }
    }

    // Inline code span detection: backticks
    const ch = chars[i];
    if (ch === "`") {
      // toggle inInline; we keep it simple: treat `...` as a span that ends at next `
      inInline = !inInline;
      out.push("`");
      i++;
      continue;
    }

    if (inInline) {
      out.push(ch);
      i++;
      continue;
    }

    // Outside code: escape MDX-significant characters
    if (ch === "<") {
      out.push("&lt;");
      i++;
      continue;
    }
    if (ch === ">") {
      out.push("&gt;");
      i++;
      continue;
    }
    if (ch === "{") {
      out.push("&#123;");
      i++;
      continue;
    }
    if (ch === "}") {
      out.push("&#125;");
      i++;
      continue;
    }

    out.push(ch);
    i++;
  }

  return out.join("");
}

async function run() {
  if (!remoteFixMap || remoteFixMap.length === 0) {
    console.warn("[mdx-repair] Nothing to do (no documents).");
    return;
  }

  for (const entry of remoteFixMap) {
    for (const doc of entry.documents) {
      const abs = resolve(process.cwd(), entry.outDir, doc);
      if (!existsSync(abs)) continue;
      const orig = readFileSync(abs, "utf8");
      const fixed = escapeMdxTraps(orig);
      if (fixed !== orig) {
        writeFileSync(abs, fixed, "utf8");
        console.log(`[mdx-fix] ${entry.outDir}/${doc}`);
      }
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
