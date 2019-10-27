<template>
  <div class="tab-bar-item" @click="changePath">
    <div v-if="isActive" class="active-icon"><slot name="active-icon"></slot></div>
    <div v-else class="default-icon"><slot name="default-icon"></slot></div>
    <div class="text" :style="activeColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default(){
          return "red"
        }
      }
    },
    methods: {
      changePath(){
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive(){
        return this.$route.path === this.path;
      },
      activeColor(){
        return this.isActive ? {color: this.color} : {};
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
  }
  .active-icon, .default-icon{
    width: 22px;
    height: 22px;
    margin: 3px auto 0;
  }
  .active-icon img, .default-icon img {
    width: 100%;
    height: 100%;
  }
  .text {
    font-size: 14px;
    margin-top: 3px;
    color: #333;
  }
</style>