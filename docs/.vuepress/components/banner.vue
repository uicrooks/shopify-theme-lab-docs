<template>
  <article v-if="url && src">
    <a :href="url">
      <img :src="src" loading="lazy">

      <div class="note">
        Get it 🔥
      </div>
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
  border: 1px solid var(--c-border);
  margin: 2rem 0 1rem 0;

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: all .125s ease-in-out;
  }

  .note {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #000;
    color: white;
    padding: 5px 10px;
    transform: translateY(100%);
    transition: all .125s ease-in-out;
  }

  &:hover {
    a > img {
      transform: scale(1.025);
    }

    .note {
      transform: translateY(0);
    }
  }
}
</style>