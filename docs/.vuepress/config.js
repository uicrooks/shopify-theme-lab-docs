const navbar = require('./configs/navbar')

module.exports = {
  lang: 'en-US',
  title: 'Shopify Theme Lab',
  description: 'Shopify theme development environment using Liquid, Vue and Tailwind CSS. Built on top of Shopify CLI.',

  themeConfig: {
    logo: '/images/logo.svg',
    navbar,
    repo: 'https://github.com/uicrooks/shopify-theme-lab',
    repoLabel: 'GitHub'
  },

  plugins: [
    // docs: https://v2.vuepress.vuejs.org/reference/plugin/search.html
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
    ]
  ]
}