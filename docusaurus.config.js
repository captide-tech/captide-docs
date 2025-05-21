// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Captide API Documentation",
  tagline: "Embed intelligence from an extensive library of financial disclosures into investment models, research tools, and AI assistants with just a few lines of code.",
  favicon: "img/favicon.png",

  url: "https://docs.captide.co",
  baseUrl: "/",

  organizationName: "captide",
  projectName: "captide-docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      {
        api: {
          path: "openapi.json",
          routeBasePath: "api",
          apiLayoutComponent: "@theme/ApiPage",
          apiItemComponent: "@theme/ApiItem",
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/captide-logo.svg",
    navbar: {
      title: "",
      logo: {
        alt: "Captide Logo",
        src: "img/captide-logo.svg",
        srcDark: "img/captide-logo-white.svg",
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
    colorMode: {
      disableSwitch: true,
    },
  },

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
};

export default config;