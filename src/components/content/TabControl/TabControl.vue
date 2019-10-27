<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="{active: index===tabsIndex}" v-for="(item, index) in tabs" @click="itemClick(item.type, index)">{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        tabsIndex: 0
      }
    },
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    methods: {
      itemClick(type, index){
        this.tabsIndex = index;
        this.$emit("changeType", type, index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    color: #333;
  }
  .tab-control-item.active {
    color: hotpink;
  }
</style>