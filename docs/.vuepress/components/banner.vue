<template>
  <article v-if="url && src">
    <a :href="url">
      <img :src="src" loading="lazy">
    </a>
  </article>
</template>

<script>
export default {
  data () {
    return {
      url: '/',
      src: null
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  height: 225px;
  overflow: hidden;
  margin: 2rem 0 1rem 0;

  a {
    display: block;
    width: 100%;
    height: 100%;
    transition: all .125s ease-in-out;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &:hover > a {
    transform: scale(1.025);
  }
}
</style>