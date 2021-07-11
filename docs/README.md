---
home: true
title: Home
heroImage: /images/hero.svg
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
  - title: Cutting edge
    details: Supports the latest Shopify tooling and features like Online Store 2.0.
  - title: Shopify CLI
    details: Integrates very well with the official Shopify CLI.
  - title: Vue
    details: Bundled with the latest Vue release. Supports the Vue 3 ecosystem.
  - title: Tailwind CSS
    details: Bundled with the latest Tailwind CSS version. Tailwind UI support.
  - title: Themes
    details: Start with a prebuilt Theme ready for customization or from scratch.
  - title: Customizable
    details: Change any part of Theme Lab and make it your own!
footer: MIT Licensed | Copyright © 2020-present Sergej Samsonenko
---

### Start developing

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
# init theme lab with the Shopify CLI
shopify theme init -u https://github.com/uicrooks/shopify-theme-lab

# log into your store
shopify login --store <your-store.myshopify.com>

# install dependencies and start developing
npm install
npm run start
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
# init theme lab with the Shopify CLI
shopify theme init -u https://github.com/uicrooks/shopify-theme-lab

# log into your store
shopify login --store <your-store.myshopify.com>

# install dependencies and start developing
yarn install
yarn start
```

  </CodeGroupItem>
</CodeGroup>