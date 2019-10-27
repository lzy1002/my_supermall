<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" color="hotpink">
        <img slot="active-icon" src="../../../assets/images/tabbar/home_active.svg" alt="">
        <img slot="default-icon" src="../../../assets/images/tabbar/home.svg" alt="">
        <span slot="text">主页</span>
      </tab-bar-item>
      <tab-bar-item path="/category" color="hotpink">
        <img slot="active-icon" src="../../../assets/images/tabbar/category_active.svg" alt="">
        <img slot="default-icon" src="../../../assets/images/tabbar/category.svg" alt="">
        <span slot="text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart" color="hotpink">
        <img slot="active-icon" src="../../../assets/images/tabbar/cart_active.svg" alt="">
        <img slot="default-icon" src="../../../assets/images/tabbar/cart.svg" alt="">
        <span slot="text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile" color="hotpink">
        <img slot="active-icon" src="../../../assets/images/tabbar/profile_active.svg" alt="">
        <img slot="default-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
        <span slot="text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./TabBar.vue";
  import TabBarItem from "./TabBarItem.vue";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>