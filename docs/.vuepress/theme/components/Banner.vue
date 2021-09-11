<template>
  <div :class="[ layout === 'slim' ? 'page-meta' : 'wrap' ]">
    <a
      :href="link"
      target="_blank"
      :class="[ layout === 'slim' ? 'banner--slim' : 'banner--boxed' ]"
      class="banner"
    >
      <span class="logo">
        <slot name="logo" />
      </span>

      <span class="text">
        <slot name="text" />
      </span>

      <span class="badge">
        <slot name="badge" />
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'slim',
      validator: value => ['slim', 'boxed'].includes(value)
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/**
 * wrap
 * for boxed layout
 */
.wrap {
  margin: 0 20px 20px;
}

@media (max-width: 959px) {
  .wrap {
    margin: 0 16px 16px;
  }
}

/**
 * banner
 */
.banner {
  display: flex;
  justify-content: space-between;
  background: var(--c-bg-light);
  border-radius: 4px;
  gap: 16px;
  padding: 16px;
  transition: all .2s ease-in-out;
}

@media (max-width: 959px) {
  .banner {
    flex-direction: column;
    align-items: start;
    padding: 12px;
  }
}

.banner:hover {
  background: var(--c-bg-lighter);
}

.banner--boxed {
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.banner--slim {
  align-items: center;
}

@media (max-width: 959px) {
  .banner--slim {
    flex-direction: column;
    align-items: flex-start;
  }
}

/**
 * logo
 */
.logo {
  width: 100%;
  height: auto;
  max-width: 95px;
  display: flex;
  align-items: center;
  color: rgb(39 39 49);
  transition: all .2s ease-in-out;
}

html.dark .logo {
  color: rgb(255 255 255);
}

.banner--boxed .logo {
  max-width: 85px;
}

/**
 * text
 */
.text {
  color: rgb(100 120 140);
  font-weight: 400;
}

html.dark .text {
  color: var(--c-text);
}

/**
 * badge
 */
.badge {
  display: inline-block;
  color: var(--c-text-accent);
  border: 1px solid var(--c-text-accent);
  font-size: 12px;
  padding: 2px 6px;
}
</style>