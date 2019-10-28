<template>
  <div class="cart-nav-bar">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar.vue";

  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    computed: {
      cartListLength(){
        return this.$store.state.cartList.length;
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: lightpink;
  }
</style>