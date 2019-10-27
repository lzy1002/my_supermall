<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    height: 44px;
    width: 100%;
    display: flex;
    line-height: 44px;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .left {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    text-align: center;
  }
  .right {
    width: 60px;
    height: 100%;
  }
</style>