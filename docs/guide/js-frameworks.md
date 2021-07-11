# JS Frameworks

## Removing Vue

1. Remove all `Vue` packages.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm uninstall vue vuex vue-loader @vue/compiler-sfc
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn remove vue vuex vue-loader @vue/compiler-sfc
```

  </CodeGroupItem>
</CodeGroup>

2. Remove `src/vue` directory.

```sh
rm -r src/vue
```

3. Remove everything from `src/main.js` except for `import './css/main.css'`

```js
import './css/main.css'
```

4. Remove `Vue` from `.eslintrc.js`.

```js{4,7}
module.exports = {
  extends: [
    ...
-   'plugin:vue/vue3-recommended'
  ],
  plugins: [
-   'vue'
  ]
  ...
}
```

5. Remove `Vue` from `webpack.common.js`.

```js{2-3,10-13,19-23}
...
- const webpack = require('webpack')
- const { VueLoaderPlugin } = require('vue-loader')
...

module.exports = {
  ...
  module: {
    rules: [
-     {
-       test: /\.vue$/,
-       loader: 'vue-loader'
-     }
      ...
    ]
  },
  plugins: [
    ...
-   new VueLoaderPlugin(),
-   new webpack.DefinePlugin({
-     __VUE_OPTIONS_API__: 'true',
-     __VUE_PROD_DEVTOOLS__: 'false'
-   })
  ]
}
```

## Alpine.js

[Alpine.js](https://alpinejs.dev) is a rugged, minimal tool for composing behavior directly in your markup.

1. Install `alpinejs`.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh
npm install alpinejs
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh
yarn add alpinejs
```

  </CodeGroupItem>
</CodeGroup>

2. import `alpinejs` into `src/main.js`

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
```