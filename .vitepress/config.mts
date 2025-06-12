import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "PyLearn",
  description: "PyLearn is a documentation site and a tutorial repository.",
  lastUpdated: true,
  metaChunk: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/getting-started/setting-up', activeMatch: '/docs/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installing Python', link: '/docs/getting-started/installing' },
          { text: 'Choosing an IDE', link: '/docs/getting-started/choosing-an-ide' },
          { text: 'Setting Up', link: '/docs/getting-started/setting-up' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XDPXI/PyLearn' }
    ],

    editLink: {
      pattern: 'https://github.com/XDPXI/PyLearn/edit/website/:path'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2025 XDPXI'
    }
  }
})
