import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "PyLearn",
    description: "PyLearn is a documentation site and a tutorial repository.",
    head: [["link", {
        rel: "icon",
        sizes: "64x64",
        href: "https://raw.githubusercontent.com/XDPXI/PyLearn/website/python.svg"
    }]],
    lastUpdated: true,
    metaChunk: true,
    cleanUrls: true,
    themeConfig: {
        logo: 'https://raw.githubusercontent.com/XDPXI/PyLearn/website/python.svg',

        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/docs/getting-started/setting-up', activeMatch: '/docs/'},
            {text: 'Examples', link: 'https://github.com/XDPXI/PyLearn/tree/main/Examples'},
        ],

        sidebar: [
            {
                text: 'Links',
                items: [
                    {text: 'Python', link: 'https://python.org'},
                    {text: 'GitHub', link: 'https://github.com/XDPXI/PyLearn'},
                    {text: 'Examples', link: 'https://github.com/XDPXI/PyLearn/tree/main/Examples'},
                ],
                collapsed: false,
            },
            {
                text: 'Getting Started',
                items: [
                    {text: 'Installing Python', link: '/docs/getting-started/installing'},
                    {text: 'Choosing an IDE', link: '/docs/getting-started/choosing-an-ide'},
                    {text: 'Setting Up', link: '/docs/getting-started/setting-up'},
                ],
                collapsed: false,
            },
            {
                text: 'The Basics',
                items: [
                    {text: 'Print', link: '/docs/basics/print'},
                    {text: 'Variables', link: '/docs/basics/variables'},
                    {text: 'Input', link: '/docs/basics/input'},
                    {text: 'Loops', link: '/docs/basics/loops'},
                    {text: 'Functions', link: '/docs/basics/functions'},
                ],
                collapsed: true,
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/XDPXI/PyLearn'}
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
