# Getting Started

## Prerequisites

- [Ruby v2.7+](https://www.ruby-lang.org/en)
- [Shopify CLI v2+](https://shopify.dev/themes/tools/cli/installation)
- [Node.js v14+](https://nodejs.org/en)

## Installation

1. Install the Shopify CLI by following [these steps](https://shopify.dev/themes/tools/cli/installation).

2. Create a [development store](https://shopify.dev/themes/tools/development-stores#create-a-development-store-to-build-and-test-your-theme).

::: tip
[Online Store 2.0](https://shopify.dev/themes/migration) features are available on any development store created after June 29, 2021.
:::

3. Log out of your newly created store and then log in again using the `your-store.myshopify.com/admin` URL

::: tip
If you're the owner of the development store, then you need to log in to the store using the store URL at least once (for example, using your-store.myshopify.com/admin) before you can start using the Shopify CLI.
:::

4. Log into your development store through the Shopify CLI.

```sh
shopify login --store <your-store.myshopify.com>
```

5. Clone the Shopify Theme Lab repo or simply use the Shopify CLI.

<CodeGroup>
  <CodeGroupItem title="Shopify CLI" active>

```sh
shopify theme init -u https://github.com/uicrooks/shopify-theme-lab
```

  </CodeGroupItem>

  <CodeGroupItem title="Git">

```sh
git clone "https://github.com/uicrooks/shopify-theme-lab.git" shopify-theme-lab
```

  </CodeGroupItem>
</CodeGroup>

6. Install dependencies and run the `start` task.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install
npm run start
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn install
yarn start
```

  </CodeGroupItem>
</CodeGroup>

7. Open the development URL provided by the Shopify CLI.

## Structure

```
shopify-theme-lab/            📁 root of your Shopify Theme Lab project
├─ .config/                   📁 development environment files and configs
│  ├─ webpack/                📁 webpack configs
│  │   ├─ webpack.common.js   📄 webpack shared config
│  │   ├─ webpack.dev.js      📄 webpack development config
│  │   └─ webpack.prod.js     📄 webpack production config
│  ├─ .browserslistrc         📄 Browserslist config
│  ├─ .eslintrc.js            📄 ESLint config
│  ├─ .stylelintrc.js         📄 stylelint config
│  └─ postcss.config.js       📄 PostCSS config
├─ shopify/                   📁 default Shopify theme structure
│  ├─ assets/                 📁 files outputted by webpack will be placed here
│  └─ ...
├─ src/                       📁 source files processed by webpack
│  ├─ css/                    📁 css directory
│  │   └─ main.css            📄 main stylesheet
│  ├─ vue/                    📁 Vue, Vuex files and directories
│  │   └─ ...
│  ├─ main.js                 📄 webpack's main entry point
│  └─ tailwind.config.js      📄 Tailwind CSS config
├─ .gitignore                 📄 files and directories ignored by git
├─ package.json               📄 dependencies and tasks
└─ ...
```

## Tasks

| Task | Description |
| - | - |
| start | run `shopify:serve` and `webpack:watch` tasks simultaneously in parallel |
| deploy | upload local files from the `shopify` directory to the store that you're connected to |
| deploy:new | same as `deploy` but creates a new unpublished theme |
| webpack:watch | bundle and watch for changes in `src/` files with webpack |
| webpack:build | create minified production files for Shopify in `shopify/assets/` directory |
| shopify:serve | upload the current theme as a development theme to the store that you're connected to |
| shopify:pull | retrieve theme files from Shopify |
| lint | run all `lint:*` tasks in sequence |
| lint:js | lint JavaScript inside the `src/` directory |
| lint:css | lint CSS inside the `src/` directory |
| lint:shopify | run `shopify theme check` in the `shopify` directory |
| fix | same as `lint` task but also fixes any fixable errors |
| fix:js | same as `lint:js` task but also fixes any fixable errors |
| fix:css | same as `lint:css` task but also fixes any fixable errors |
| fix:shopify | same as `lint:shopify` task but also fixes any fixable errors |