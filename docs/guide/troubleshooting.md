# Troubleshooting

## Vue

- Vue components inside `.liquid` files can only be used in a non-self-closing kebab case manner.

```liquid
<kebab-case></kebab-case>
```

- If a `name` is defined inside a `.vue` file, it can be referenced by `name` otherwise the component will be named after the file path starting from the `src/vue/components/` directory.

```vue
<script>
// src/vue/components/render/my-component.vue

export default {
  name: 'MyComponent' // not required
}
</script>
```

```liquid
<!-- has a name defined -->
<my-component></my-component>

<!-- has no name defined -->
<render-my-component></render-my-component>
```

- Don't place regular style and script tags inside the Vue instance. They will be removed on mount. Use Vue's `<component>` tags instead and specify the `'is'` prop.

```liquid
<div id="app">
  <component is="style">
    ...
  <componet>

  <component is="script">
    ...
  </componet>
</div>
```

- If you want to pass an entire Shopify Drop (Object) as a prop, you have to convert the Drop first to `JSON` and then replace all double quotes with single quotes.

```liquid
<component
  :shopify-data="{{ product | json | replace: '"', "'" }}"
></component>
```

- Not all Drops can be converted to `JSON` though if you get an `{"error":"json not allowed for this object"}` you'll have to pass the values in question individually.

```liquid
<component
  :shopify-data="{
    productTitle: '{{ product.title }}',
    productId: '{{ product.id }}'
  }"
></component>
```

## Limitations

- During development when the `start` task is running, the browser console throws a `bundle.css` missing error.