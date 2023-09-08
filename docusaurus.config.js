// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GTS Assets',
  tagline: 'Welcome to GTS Assets!',
  favicon: 'img/image1.png',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gts-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EvanDevvv', // Usually your GitHub org/user name.
  projectName: 'gts-docs', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "en",
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GTS Assets',
        logo: {
          alt: 'My Site Logo',
          src: 'img/image1.png',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            items: [
              {
                type: 'docSidebar',
                label: 'Basic Spawner',
                sidebarId: 'spawner',
              },
              {
                type: 'docSidebar',
                label: 'Auto Speccer',
                sidebarId: 'autospec',
              },
            ]
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.roblox.com/groups/16838109/GTS-Assets#!/about',
            label: 'Roblox Group',
            position: 'right',
          },
          {
            href: 'https://discord.gg/5k85S4KWSR',
            label: 'Discord Server',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Bus Spawner',
                to: '/docs/spawner',
              },
              {
                label: 'Auto Speccer',
                to: '/docs/autospec/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Roblox Group',
                href: 'https://www.roblox.com/groups/16838109/GTS-Assets#!/about',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5k85S4KWSR',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EvanDevvv',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GTS Assets.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
