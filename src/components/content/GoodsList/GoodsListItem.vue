<template>
  <div class="goods-list-item" @click="goDetail">
    <img :src="goodsitem.show.img" alt="" @load="imageLoad">
    <p class="title">{{goodsitem.title}}</p>
    <p class="info"><span class="price">￥{{goodsitem.price}}</span><span class="collection">{{goodsitem.cfav}}</span></p>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit("imageLoad");
      },
      goDetail(){
        this.$router.push("/detail/" + this.goodsitem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    margin-bottom: 10px;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 6px;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    margin: 5px 0;
  }
  .info {
    text-align: center;
  }
  .info .price {
    color: red;
    margin: 0 3px;
  }
  .info .collection {
    margin: 0 3px;
    color: #666;
  }
  .info .collection::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../assets/images/common/collect.svg") 0 0;
    background-size: 16px 16px;
    vertical-align: middle;
  }
</style>
