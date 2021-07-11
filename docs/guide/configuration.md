# Configuration

## Webpack

Theme Lab uses vanilla webpack configurations, you can easily adjust them however you like. All webpack configs reside inside the `.config/webpack/` directory. `src/main.js` is webpack's main entry point.

## CSS preprocessors

::: tip
For the most cohesive development experience, it's recommended that you use PostCSS exclusively when working with Tailwind CSS.
:::

By default, only PostCSS with `postcss-preset-env` is installed. [postcss-preset-env](https://preset-env.cssdb.org/features) lets you use tomorrow’s CSS today. If you want to use a preprocessor it's recommended to use `SASS/SCSS` since it's the most compatible with a variety of CSS frameworks.

### SASS/SCSS

1. Install `SASS` packages.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install sass sass-loader --save-dev
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
 yarn add sass sass-loader --dev
```

  </CodeGroupItem>
</CodeGroup>

2. Rename `src/css/main.css` to `src/css/main.scss`.

3. Change the `CSS` import in `src/main.js`.

```js
import './css/main.scss'
```

### LESS

1. Install `LESS` packages.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install less less-loader --save-dev
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
 yarn add less less-loader --dev
```

  </CodeGroupItem>
</CodeGroup>

2. Rename `src/css/main.css` to `src/css/main.less`.

3. Change the `CSS` import in `src/main.js`.

```js
import './css/main.less'
```

### Stylus

1. Install `STYLUS` packages.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install stylus stylus-loader --save-dev
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
 yarn add stylus stylus-loader --dev
```

  </CodeGroupItem>
</CodeGroup>

2. Rename `src/css/main.css` to `src/css/main.styl`.

3. Change the `CSS` import in `src/main.js`.

```js
import './css/main.styl'
```