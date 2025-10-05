export type SectionInfo = {
  section: string; // e.g. "languageComparison"
  absDir: string; // absolute path to docs/<section>
  hasIndexDoc: boolean; // index.md|mdx / readme.md|mdx / <section>.md|mdx
  hasGeneratedIndex: boolean; // _category_.json with link.type === "generated-index" and matching slug
};

export type RemoteEntry = {
  name: string;
  gitUrl: string; // https://github.com/<owner>/<repo>.git (or without .git)
  branch?: string; // default "master"
  outDir: string; // where markdowns were written locally (e.g., docs/technologies)
  documents: string[]; // repo-relative file paths (POSIX)
  sourceBaseUrl: string;
};

export type RemoteFixEntry = {
  outDir: string;
  sourceBaseUrl: string;
  documents: string[];
  name?: string;
  gitUrl?: string;
  branch?: string;
};

export interface RemoteRepo {
  /** Human-readable plugin name (path-safe). */
  name: string;
  /** Where downloaded files should be written in your Docusaurus project. */
  outDir: string;
  /** GitHub repo URL - with or without .git is fine. */
  repoUrl: string; // e.g. "https://github.com/reshinto/programming_language_syntax_comparison.git"
  /** Optional: branch to pin; otherwise we use the repo's default branch. */
  branch?: string;
  /** Optional: only include files under these prefixes (e.g. ["docs/", "guides/"]). */
  pathPrefixFilter?: string[];
  /** Optional: file extensions to include (defaults to .md & .mdx). */
  includeExtensions?: string[];
}
