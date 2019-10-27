<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    height: 49px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lavenderblush;
    display: flex;
    box-shadow: 0 -1px 1px 1px lavenderblush;
  }
</style>
