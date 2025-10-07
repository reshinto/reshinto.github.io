// scripts/build-portfolio.ts
// One GitHub API call (list repos) + CDN HEAD checks to pick /images/demo.<ext> per repo.
// No jsDelivr, no Contents API.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

type ApiRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  homepage?: string | null;
  topics?: string[];
  default_branch: string;
  archived?: boolean;
  disabled?: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
};

type OutRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  homepage?: string | null;
  topics?: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  image: string | null;
};

const USERNAME = process.env.GITHUB_USERNAME || "reshinto";
const OUT_PATH = resolve("src/data/portfolio.generated.json");

// Try these in order for /images/demo.<ext>
const DEMO_EXTS = ["png", "jpg", "jpeg", "webp", "gif", "svg"];

async function fetchOnePageOfRepos(username: string): Promise<ApiRepo[]> {
  const url =
    `https://api.github.com/users/${encodeURIComponent(username)}` +
    `/repos?type=public&per_page=100&sort=updated`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "docusaurus-portfolio-v3",
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `GitHub API error: ${res.status} ${res.statusText}\n${body}`
    );
  }
  return (await res.json()) as ApiRepo[];
}

// Build raw.githubusercontent.com URL for /images/demo.<ext>
function buildDemoUrl(
  username: string,
  repo: string,
  branch: string,
  ext: string
) {
  return `https://raw.githubusercontent.com/${username}/${repo}/refs/heads/${branch}/images/demo.${ext}`;
}

// Check existence via CDN (no API rate limit)
async function pickExistingDemoUrl(
  username: string,
  repo: string,
  branch: string
): Promise<string | null> {
  for (const ext of DEMO_EXTS) {
    const url = buildDemoUrl(username, repo, branch, ext);
    const resp = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "docusaurus-portfolio-v3" },
    });
    if (resp.ok) return url;
    if (resp.status === 200) return url; // defensive
  }
  return null;
}

async function main() {
  // Exactly ONE GitHub API call to get repo list + default_branch
  const repos = await fetchOnePageOfRepos(USERNAME);

  // Filter and sort (by stars desc as a nice default)
  const filtered = repos
    .filter((r) => !r.archived && !r.disabled)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  // CDN-only image picking (parallelized a bit)
  const CONCURRENCY = 10;
  const out: OutRepo[] = new Array(filtered.length);
  let i = 0;

  async function worker() {
    while (true) {
      const idx = i++;
      if (idx >= filtered.length) break;
      const r = filtered[idx];

      // Try /images/demo.<ext> on repo's default branch
      const imageUrl = await pickExistingDemoUrl(
        USERNAME,
        r.name,
        r.default_branch
      );

      out[idx] = {
        name: r.name,
        full_name: r.full_name,
        html_url: r.html_url,
        description: r.description,
        stargazers_count: r.stargazers_count,
        language: r.language,
        homepage: r.homepage,
        topics: r.topics ?? [],
        created_at: r.created_at,
        updated_at: r.updated_at,
        pushed_at: r.pushed_at,
        image: imageUrl, // null if not found
      };
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(
    OUT_PATH,
    JSON.stringify({ username: USERNAME, repos: out }, null, 2),
    "utf8"
  );

  console.log(`[portfolio] Wrote ${out.length} public repos → ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
