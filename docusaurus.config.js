// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Captide Documentation",
  tagline: "AI-powered Q&A for SEC filings",
  favicon: "img/captide-icon.svg",

  // Set the production url of your site here
  url: "https://docs.captide.co",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "captide", // Usually your GitHub org/user name.
  projectName: "captide-docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "openapi.json",
          routeBasePath: "api",
          apiLayoutComponent: "@theme/ApiPage",
          apiItemComponent: "@theme/ApiItem",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/captide/captide-docs/tree/main/",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/captide-logo.svg",
      navbar: {
        title: "",
        logo: {
          alt: "Captide Logo",
          src: "img/captide-logo.svg",
          srcDark: "img/captide-logo.svg",
          width: 120,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/api", label: "API Reference", position: "left" },
          {
            href: "https://www.captide.co/demo",
            label: "Obtain a License",
            position: "right",
          },
          {
            href: "https://app.captide.co/chat",
            label: "Live Demo",
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
                label: "Getting Started",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/api",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Live Demo",
                href: "https://app.captide.co/chat",
              },
              {
                label: "Contact Us",
                href: "https://www.captide.co/demo",
              },
              {
                label: "API Dashboard",
                href: "https://app.captide.co/api-dashboard",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://captide.co",
              },
              {
                label: "Docs GitHub",
                href: "https://github.com/captide-tech/captide-docs",
              },
              {
                label: "Captide.js GitHub",
                href: "https://github.com/captide-tech/captidejs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Captide.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "json", "typescript"],
      },
    }),
};

export default config; 