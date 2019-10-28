<template>
  <div class="detail-goods-list">
    <div class="title">为您推荐</div>
    <goods-list :goodslist="goodsList"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/GoodsList/GoodsList.vue";

  export default {
    name: "DetailGoodsList",
    props: {
      goodsList: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .title {
    padding: 15px 8px;
    color: #333;
  }
</style>