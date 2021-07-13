# Deployment

## Manual

Build and deploy a `new` theme to the store that you're connected to.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm run deploy:new
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn deploy:new
```

  </CodeGroupItem>
</CodeGroup>

Build and deploy to an `existing` theme on the store that you're connected to.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm run deploy
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn deploy
```

  </CodeGroupItem>
</CodeGroup>

## Pull

::: tip
The deploy task overrides all files of the remote theme! If any changes were made through the Shopify theme editor you might want to download the theme files before deploying
:::

1. Make sure you have a clean git history and committed all files.

2. Run the `shopify:pull` command.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm run shopify:pull
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn shopify:pull
```

  </CodeGroupItem>
</CodeGroup>

3. Revert any files that were pulled and you don't need e.g. Because you already have a newer version.

## GitHub integration

::: tip
Since Theme Lab uses a custom build workflow it's not out of the box compatible with the [Shopify GitHub integration](https://shopify.dev/themes/tools/github).
:::

One of the simplest ways to achieve version control for a live store is to use 2 separate repos. One for your `source code` and one for your `dist code`. That way you can use the Shopify GitHub integration for your dist repo and track possible changes on a live theme done through Shopify.

1. When you're ready to publish a theme to a live store simply run the build task.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm run webpack:build
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn webpack:build
```

  </CodeGroupItem>
</CodeGroup>

2. Then move the contents of the `shopify` directory from the `source-code` to the `dist-code` directory and push your changes to GitHub.

```
shopify-theme-lab/
├─ source-code/shopify/  <- move all contents from here
└─ dist-code/            <- to here
```

The [Shopify docs](https://shopify.dev/themes/best-practices/version-control) describe several other ways how to set up version control.