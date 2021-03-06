module.exports = [
  // Guide
  {
    text: 'Guide',
    link: '/guide/'
  },

  // Resources
  {
    text: 'Resources',
    children: [
      {
        text: 'Themes',
        children: [
          {
            text: 'Foundation Theme',
            link: 'https://github.com/uicrooks/shopify-foundation-theme'
          }
        ]
      },
      {
        text: 'Plugins',
        children: [
          {
            text: 'I18n',
            link: 'https://github.com/uicrooks/shopify-theme-lab-plugins/tree/main/packages/i18n'
          }
        ]
      }
    ]
  },

  // Reference
  {
    text: 'Reference',
    children: [
      {
        text: 'Shopify',
        children: [
          {
            text: 'Shopify CLI',
            link: 'https://shopify.dev/themes/tools/cli'
          },
          {
            text: 'Shopify Cheat Sheet',
            link: 'https://www.shopify.com/partners/shopify-cheat-sheet'
          }
        ]
      }
    ]
  }
]