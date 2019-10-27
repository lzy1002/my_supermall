<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="(item, index) in recommendList">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommendList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log(this.recommendList);
    }
  }
</script>

<style scoped>
  .home-recommend {
    width: 100%;
    padding: 8px 8px 60px 8px;
    display: flex;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-item {
    flex: 1;
    margin: 0 8px;
  }
  .home-recommend-item img {
    width: 100%;
  }
  .home-recommend-item p {
    text-align: center;
    margin-top: 5px;
    color: #666;
  }
</style>