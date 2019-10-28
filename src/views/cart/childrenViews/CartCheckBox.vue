<template>
  <div class="cart-check-box" :class="{active: isChecked}">
    <img src="../../../assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CartCheckBox",
    props: {
      isChecked: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style scoped>
  .cart-check-box {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .cart-check-box.active {
    background-color: red;
  }
  .cart-check-box img {
    width: 100%;
    height: 100%;
  }
</style>