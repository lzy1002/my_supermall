<template>
  <div class="home-feature">
    <img src="../../../assets/images/home/recommend_bg.jpg" alt="" @load="imageLoad">
  </div>
</template>

<script>
  export default {
    name: "HomeFeature",
    methods: {
      imageLoad(){
        this.$emit("featureImageLoad");
      }
    }
  }
</script>

<style scoped>
  .home-feature {
    width: 100%;
  }
  .home-feature img {
    width: 100%;
  }
</style>