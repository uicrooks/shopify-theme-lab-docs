# Troubleshooting

## Vue

- All Vue-related files are auto-loaded by webpack with [require.context](https://webpack.js.org/guides/dependency-management/#requirecontext) - Vue components, Vuex modules, as well as mixins and directives with `global` in their filename. Everything is defined in `src/main.js`

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

- Use `raw` tags to output unparsed code inside of `.liquid` files.

```liquid
{% raw %}{{ vueVariable }}{% endraw %}
```

- Don't place regular `<style>` and `<script>` tags inside the Vue instance. They will be removed on mount. Use Vue `<component>` tags instead and specify the `'is'` prop.

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

- `Renderless` components require one single root element.

```liquid
<rendereless-component v-slot="{ data }">
  <div>
    ...
  </div>
<rendereless-component>
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

- Whenever you use `Vue` functionality inside a Shopify `section` add the `vue` keyword to the section's wrapper classes. It fixes rendering issues in the theme editor as well as during development-reloading.

```liquid
<!-- shopify/sections/section-file.liquid -->

...

{% schema %}
{
  "class": "vue-section"
}
{% endschema %}
```