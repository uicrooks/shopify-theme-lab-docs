<template>
  <Banner
    :layout="layout"
    link="https://flowrift.com?utm_source=themelab-docs&utm_medium=organic"
  >
    <template #logo>
      <Logo />
    </template>

    <template #text>
      Beautifully designed Tailwind CSS UI blocks.
    </template>

    <template #badge>
      Sponsored
    </template>
  </Banner>
</template>

<script>
import Banner from './Banner.vue'
import Logo from './logo/Flowrift.vue'

export default {
  components: {
    Banner,
    Logo
  },
  props: {
    layout: {
      type: String,
      default: 'slim',
      validator: value => ['slim', 'boxed'].includes(value)
    }
  }
}
</script>