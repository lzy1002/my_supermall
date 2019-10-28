<template>
  <div class="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/common/TabBar/MainTabBar.vue";

  export default {
    name: "App",
    components: {
      MainTabBar
    }
  }
</script>

<style scoped>
  @import "./assets/css/normalize.css";
  @import "./assets/css/base.css";

</style>