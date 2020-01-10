<template>
  <div>
    <Layout>
      <template slot="header">
        <div>小红也是头部</div>
      </template>
      <template slot="content">
        <div>小红也是中部</div>
      </template>
      <template slot="footer">
        <div>小红也是底部</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./Layout.vue";
export default {
  components: {
    Layout
  }
};
</script>

<style>
</style>