// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Terence Portfolio",
  tagline:
    "Self-taught Software Engineer & Everything that can be automated, must be automated fanatic",
  url: "http://terencekong.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/docusaurus.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "reshinto", // Usually your GitHub org/user name.
  projectName: "reshinto.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/reshinto/reshinto.github.io/blob/dev/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-portfolio-plugin",
      {
        username: "reshinto",
        path: "/portfolio",
        pageTitle: "Portfolio",
        pageDescription: "My Portfolio",
        userOptions: {},
        repoOptions: {
          type: "public",
          sort: "stargazers_count",
          direction: "desc",
          numRepos: Number.MAX_SAFE_INTEGER,
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "programming_language_syntax_comparison", // used by CLI, must be path safe
        sourceBaseUrl:
          "https://raw.githubusercontent.com/reshinto/programming_language_syntax_comparison/master/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents: ["readme.md"], // the file names to download
      },
    ],
  ],

  themes: [
    "docusaurus-portfolio-theme",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "About",
        logo: {
          alt: "My Site Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            type: "doc",
            docId: "documentation",
            position: "left",
            label: "Documentation",
          },
          {to: "/portfolio", label: "Portfolio", position: "left"},
          {to: "/blog", label: "Blog", position: "left"},
          {
            href: "https://github.com/reshinto",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/documentation",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://sg.linkedin.com/in/terence-kong",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/reshinto",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Terence Kong Portfolio Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "csharp",
          "cpp",
          "java",
          "swift",
          "ruby",
          "kotlin",
          "groovy",
          "nasm",
        ],
      },
    }),
};

module.exports = config;
