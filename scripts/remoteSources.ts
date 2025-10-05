// scripts/remoteSources.ts

import { RemoteRepo } from "./types";

export const REMOTE_SOURCES: RemoteRepo[] = [
  {
    name: "Basic Technologies Revision",
    outDir: "docs/technologies",
    repoUrl: "https://github.com/reshinto/Basic_technologies_revision.git",
  },
  {
    name: "Theory",
    outDir: "docs/theory",
    repoUrl: "https://github.com/reshinto/hft_notes.git",
  },
  {
    name: "Programming Language Syntax Comparison",
    outDir: "docs/languageComparison",
    repoUrl:
      "https://github.com/reshinto/programming_language_syntax_comparison.git",
  },
];
export { RemoteRepo };
