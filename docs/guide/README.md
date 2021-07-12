# Introduction

Shopify Theme Lab is a customizable modular development environment for blazing-fast Shopify theme creation. It is built on top of the [Shopify CLI](https://shopify.dev/themes/tools/cli) and extends it with additional workflow and building capabilities. By default, it's bundled with Vue.js and Tailwind CSS, but you can swap them for pretty much anything.

## Why Theme Lab?

The new Shopify Dawn theme is written in vanilla JavaScript and CSS and is quite opinionated about possible design choices. Theme Lab on the other hand is well suited for building a complex theme either from scratch, with your favourite Framework, or starting with a clutter free [Foundation Theme](https://github.com/uicrooks/shopify-foundation-theme)

## Features

- Shopify
  - Integrates with the [Shopify CLI](https://shopify.dev/themes/tools/cli)
  - [Online Store 2.0](https://shopify.dev/themes/migration) support
- JavaScript
  - [Vue](https://v3.vuejs.org)
  - [Vuex](https://next.vuex.vuejs.org)
  - Swap Vue with any other framework e.g. [Alpine.js](js-frameworks.html#alpine-js)
  - Extend with [npm packages](https://www.npmjs.com) 📦
- CSS
  - [Tailwind CSS](https://tailwindcss.com)
  - Swap Tailwind CSS with any other framework e.g. [Bulma](css-frameworks.html#bulma)
  - [PostCSS](https://postcss.org) with [postcss-preset-env](https://preset-env.cssdb.org/features)
  - Preprocessor support: [SASS / SCSS](configuration.html#sass-scss), [LESS](configuration.html#less) and [Stylus](configuration.html#stylus)
- Workflow
  - [Webpack](https://webpack.js.org)
  - [Babel](https://babeljs.io)
  - [ESLint](https://eslint.org)
  - [stylelint](https://stylelint.io)
  - [Browserslist](https://github.com/browserslist/browserslist)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - Easy customizable configurations