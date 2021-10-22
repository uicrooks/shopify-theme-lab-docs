# Modularity (Vue)

## Unified approach

By default, the unified approach is used. The Vue instance is initialized only once on each page and wraps around all page content. The advantage is you don't have to worry about initializing any Vue instances, it's just set and forget. But this can sometimes lead to some unexpected behavior when used with Shopify plugins. Some plugins may insert script or style tags inside the Vue instance, but Vue removes all regular `<script></script>` or `<style></style>` tags on mount. To use the unified approach add one single element with an `app` id to your layout template.

```html
<div id="app">
  ...
</div>
```

## Modular approach
With the modular approach, you can have as many Vue instances on a page as you want. The drawback is you have to add them manually and keep track of where you can use Vue functionality. By default, all instances share the same settings, components, mixins, directives and plugins. To use the modular approach remove all `id="app"` attributes from your template(s). Then add the `vue` attribute without any values to any HTML element to initialize a Vue instance on that element.

```html
<header vue>
  <!-- vue instance -->
  ...
</header>

<main>
  <!-- not a vue instance -->
  ...
</main>

<footer vue>
  <!-- vue instance -->
  ...
</footer>
```

::: tip
The unified approach has a higher priority than the modular approach. This means if you have an element with an `app` id on your page, all elements with the `vue` attribute will be ignored and not initialized.
:::