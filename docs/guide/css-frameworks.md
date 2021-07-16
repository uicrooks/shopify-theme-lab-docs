# CSS Frameworks

## Remove Tailwind CSS

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

## Bootstrap 5

[Bootstrap](https://getbootstrap.com/) is the world’s most popular framework for building responsive, mobile-first sites.

1. Install [SASS/SCSS](configuration.html#sass-scss) and update files accordingly.

2. Install `bootstrap` package.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install bootstrap
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn add bootstrap
```

  </CodeGroupItem>
</CodeGroup>

3. Import `bootstrap` into `src/css/main.scss`

```scss
@import "~bootstrap/scss/bootstrap";
```

## Bulma

[Bulma](https://bulma.io) is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.

1. Install [SASS/SCSS](configuration.html#sass-scss) and update files accordingly.

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

```scss
@import "~bulma/bulma";
```