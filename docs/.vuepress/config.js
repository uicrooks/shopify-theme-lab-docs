const path = require('path')
const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')

module.exports = {
  base: '/shopify-theme-lab-docs/',
  lang: 'en-US',
  title: 'Shopify Theme Lab',
  description: 'Shopify theme development environment using Liquid, Vue and Tailwind CSS. Built on top of Shopify CLI.',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/images/icons/favicon.svg'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/icons/favicon.png'
      }
    ]
  ],

  theme: path.resolve(__dirname, 'theme'),

  themeConfig: {
    logo: '/images/logo.svg',
    navbar,
    sidebar,
    repo: 'https://github.com/uicrooks/shopify-theme-lab',
    repoLabel: 'GitHub',
    docsRepo: 'https://github.com/uicrooks/shopify-theme-lab-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false
  },

  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ],

    [
      '@vuepress/plugin-search',
      {
        isSearchable: (page) => page.path !== '/',
        locales: {
          '/': {
            placeholder: 'Search (Press s)'
          }
        }
      }
    ],

    [
      '@vuepress/plugin-google-analytics',
      {
        id: process.env.GA_ID
      }
    ]
  ]
}
