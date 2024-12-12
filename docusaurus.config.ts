import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GTS Assets',
  tagline: 'Welcome to GTS Assets!',
  favicon: 'img/gts.png',

  // Set the production url of your site here
  url: 'https://evandevvv.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gts-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EvanDevvv', // Usually your GitHub org/user name.
  projectName: 'gts-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GTS Assets',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gts.png',
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
                sidebarId: 'basicspawner',
              },
              {
                type: 'docSidebar',
                label: 'Pro Spawner',
                sidebarId: 'prospawner',
              },
              {
                type: 'docSidebar',
                label: 'Advanced Spawner',
                sidebarId: 'advancedspawner',
              },
              {
                type: 'docSidebar',
                label: 'Auto Speccer',
                sidebarId: 'autospec',
              },
              {
                type: 'docSidebar',
                label: 'Routes System',
                sidebarId: 'routesystem',
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
              to: '/docs/basicspawner',
            },
            {
              label: 'Auto Speccer',
              to: '/docs/autospec/introduction',
            },
            {
              label: 'Routes System',
              to: '/docs/routesystem/introduction',
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
      copyright: `Copyright © ${new Date().getFullYear()} GTS ASSETS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
