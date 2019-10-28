<template>
  <div>
    <nav-bar class="nav-bar">
      <div class="back" slot="left" @click="back"><img src="../../../assets/images/common/back.svg" alt=""></div>
      <div class="nav" slot="center"><div class="nav-item" :class="{active: index===itemIndex}" v-for="(item, index) in navTitle" @click="itemClick(index)">{{item}}</div></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar.vue";

  export default {
    name: "DetailNavBar",
    data(){
      return {
        navTitle: ["商品", "参数", "评论", "推荐"],
        itemIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      back(){
        this.$router.back();
      },
      itemClick(index){
        this.itemIndex = index;
        this.$emit("itemClick", index);
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
  }
  .back img{
    margin-top: 11px;
    margin-left: 11px;
  }
  .nav {
    display: flex;
  }
  .nav-item {
    flex: 1;
    font-size: 15px;
    color: #666;
  }
  .nav-item.active {
    color: lightpink;
  }
</style>