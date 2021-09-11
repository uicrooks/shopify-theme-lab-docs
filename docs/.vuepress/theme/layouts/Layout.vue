<template>
  <Layout>
    <template #sidebar-bottom>
      <BannerFlowrift layout="boxed" />
    </template>

    <template #page-bottom>
      <BannerFlowrift />
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import BannerFlowrift from '../components/BannerFlowrift.vue'

export default {
  components: {
    Layout,
    BannerFlowrift
  }
}
</script>