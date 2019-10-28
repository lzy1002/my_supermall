<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartAll" :cartlistitem="item"></cart-list-item>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  import CartListItem from "./CartListItem.vue";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(["cartAll"])
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 100%;
  }
</style>