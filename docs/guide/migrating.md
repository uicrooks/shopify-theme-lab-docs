# Migrating

## Version 3 to 4

1. Remove `node_modules`.

```sh
rm -rf node_modules
```

2. Replace your `.config` directory with the new [.config](https://github.com/uicrooks/shopify-theme-lab/tree/master/.config) directory.

3. Replace your `.gitignore` file with the new [.config](https://github.com/uicrooks/shopify-theme-lab/blob/master/.gitignore) file.

4. Inside `package.json` delete the config section.

```json{2-9}
...
- "config": {
-   "reloader": {
-     "serverPort": 5000,
-     "webSocketPort": 5050,
-     "delay": 2000,
-     "indicator": true
-   }
- },
...
```

5. Inside `package.json` replace the `scripts` and `devDependencies` sections with the new ones from [package.json](https://github.com/uicrooks/shopify-theme-lab/blob/master/package.json).

```json
"scripts": {
  ...
},

"devDependencies": {
  ...
}
```

6. Add [.theme-check.yml](https://github.com/uicrooks/shopify-theme-lab/blob/master/shopify/.theme-check.yml) to your `shopify` directory.

7. Now you are ready to follow the [Getting started guide](getting-started.html) to set up your tooling.

::: tip
If you want to migrate your templates to the latest `Online Store 2.0` features, then follow the official Shopify [migration guide](https://shopify.dev/themes/migration)
:::