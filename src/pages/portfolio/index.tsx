// src/pages/portfolio/index.tsx
import React, { JSX, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

// ---- Load your custom projects ----
import proProjectsRaw from "@site/src/data/professionalProjects.json";

// ---- If you kept the GitHub build step, load it too; otherwise delete these 2 lines ----
import ghDataRaw from "@site/src/data/portfolio.generated.json"; // created by scripts/build-portfolio.ts

type GHRepo = {
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
  image: string;
};

// ---- Types for your custom JSON ----
type ProProject = {
  name: string;
  description: string;
  tech: string[];
  html_url: string; // may be empty ""
  image: string; // may be empty ""
  client: string; // e.g., "DBS Bank"
};

// ---- Page constants ----
const pageTitle = "Portfolio";
const pageDescription = "My Portfolio";

export default function PortfolioPage(): JSX.Element {
  // Normalize custom data (guard shape)
  const proProjects: ProProject[] = Array.isArray(proProjectsRaw)
    ? (proProjectsRaw as ProProject[])
    : [];

  // Optional GitHub section (remove if not used)
  const { username: ghUsername, repos: ghRepos = [] } = (ghDataRaw || {}) as {
    username?: string;
    repos?: GHRepo[];
  };

  // Build a unified set of “tech tags” from your projects
  const allTech = useMemo(() => {
    const s = new Set<string>();
    for (const p of proProjects) {
      (p.tech || []).forEach((t) => s.add(t));
    }
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [proProjects]);

  const [selectedTech, setSelectedTech] = useState<string>("");

  const visibleCustomProjects = useMemo(() => {
    if (!selectedTech) return proProjects;
    return proProjects.filter((p) => (p.tech || []).includes(selectedTech));
  }, [proProjects, selectedTech]);

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1 className="margin-bottom--sm">Terence's {pageTitle}</h1>

          {/* Simple tech filter for your custom projects */}
          {allTech.length > 0 && (
            <div className={styles.filterBar}>
              <label htmlFor="tech-filter" className={styles.filterLabel}>
                Filter by tech:
              </label>
              <select
                id="tech-filter"
                className={styles.select}
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
              >
                <option value="">All</option>
                {allTech.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          )}
        </header>

        {/* Your custom projects */}
        <section className="margin-bottom--xl">
          <h2 className="margin-bottom--sm">Professional Projects</h2>
          <p className="margin-bottom--md">Curated work and client projects.</p>

          {visibleCustomProjects.length === 0 ? (
            <div className="alert alert--secondary">
              No projects match this filter.
            </div>
          ) : (
            <div className={styles.grid}>
              {visibleCustomProjects.map((proj) => (
                <article key={proj.name} className={styles.card}>
                  {/* Optional image */}
                  {proj.image ? (
                    <div className={styles.thumbWrap}>
                      {/* Put images in /static/img/... and reference with "/img/..." */}
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className={styles.thumb}
                        loading="lazy"
                      />
                    </div>
                  ) : null}

                  <div className={styles.cardHeader}>
                    <h3 className={styles.repoName}>{proj.name}</h3>
                    {proj.client && (
                      <div className={styles.clientBadge} title="Client">
                        {proj.client}
                      </div>
                    )}
                  </div>

                  <p className={styles.description}>{proj.description}</p>

                  {proj.tech?.length ? (
                    <div className={styles.meta}>
                      {proj.tech.map((t) => (
                        <span key={t} className={styles.topic}>
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className={styles.links}>
                    {proj.html_url ? (
                      <Link
                        to={proj.html_url}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit →
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* GitHub repos (remove this whole block if you don’t want it) */}
        {ghRepos.length > 0 && (
          <section>
            <h2 className="margin-bottom--sm">Open-source Repositories</h2>
            <p className="margin-bottom--md">
              {ghUsername ? (
                <>
                  From{" "}
                  <Link to={`https://github.com/${ghUsername}`} target="_blank">
                    @{ghUsername}
                  </Link>
                  .
                </>
              ) : (
                "From GitHub."
              )}
            </p>

            <div className={styles.grid}>
              {ghRepos.map((repo) => (
                <article key={repo.full_name} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <Link
                      to={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className={styles.repoName}>{repo.name}</h3>
                    </Link>
                    <div className={styles.stars} title="Stars">
                      ⭐ {repo.stargazers_count}
                    </div>
                  </div>

                  {repo.image && (
                    <div className={styles.thumbWrap}>
                      <img
                        src={repo.image}
                        alt={`${repo.name} preview`}
                        className={styles.thumb}
                        loading="lazy"
                      />
                    </div>
                  )}
                  {repo.description && (
                    <p className={styles.description}>{repo.description}</p>
                  )}

                  <div className={styles.meta}>
                    {repo.language && (
                      <span className={styles.badge}>{repo.language}</span>
                    )}
                    {repo.topics?.slice(0, 5).map((t) => (
                      <span key={t} className={styles.topic}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    <Link
                      to={repo.html_url}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </Link>
                    {repo.homepage && (
                      <Link
                        to={repo.homepage}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* If you removed GitHub, you can optionally show nothing or an info box */}
        {ghRepos.length === 0 && (
          <section className="margin-top--lg">
            <div className="alert alert--info">
              To include GitHub repos, run the build step that generates{" "}
              <code>src/data/portfolio.generated.json</code>, or just remove the
              GitHub section from this page.
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
