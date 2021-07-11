# CSS Frameworks

## Removing Tailwind CSS

1. Remove `tailwindcss` package.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm uninstall tailwindcss
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn remove tailwindcss
```

  </CodeGroupItem>
</CodeGroup>

2. Remove `tailwind` config.

```sh
rm src/tailwind.config.js
```

3. Remove `tailwind` require from `.config/postcss.config.js`.

```js{4}
module.exports = {
  plugins: [
    ...
-   require('tailwindcss')(path.resolve(__dirname, '../src/tailwind.config.js')),
    ...
  ]
}
```

4. Remove `tailwindcss` imports from `src/css/main.css`.

```css{1-2,6}
- @import "tailwindcss/base";
- @import "tailwindcss/components";

...

- @import "tailwindcss/utilities";
```

## Bulma
[Bulma](https://bulma.io) is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.

1. Install [SASS/SCSS](/guide/configuration.html#sass-scss) and update files accordingly.

2. Install `bulma` package.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install bulma
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn add bulma
```

  </CodeGroupItem>
</CodeGroup>

3. Import `bulma` into `src/css/main.scss`

```css
@import "~bulma/bulma";
...
```