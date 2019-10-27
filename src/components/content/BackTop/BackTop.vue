<template>
  <div class="back-top">
    <img src="../../../assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top {
    width: 43px;
    height: 43px;
    position: fixed;
    right: 15px;
    bottom: 70px;
    z-index: 10;
  }
  .back-top img {
    width: 100%;
    height: 100%;
  }
</style>