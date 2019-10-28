<template>
  <div class="cart">
    <cart-nav-bar class="cart-nav-bar"></cart-nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-tool></cart-bottom-tool>
  </div>
</template>

<script>
  import Scroll from "../../components/common/Scroll/Scroll.vue";

  import CartNavBar from "./childrenViews/CartNavBar.vue";
  import CartList from "./childrenViews/CartList.vue";
  import CartBottomTool from "./childrenViews/CartBottomTool.vue";

  export default {
    name: "Cart",
    data(){
      return {

      }
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    components: {
      Scroll,
      CartNavBar,
      CartList,
      CartBottomTool
    }
  }
</script>

<style scoped>
  .cart {
    padding-top: 44px;
    padding-bottom: 93px;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .scroll {
    height: 100%;
  }
</style>