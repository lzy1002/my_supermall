<template>
  <div class="detail-bottom-bar">
    <div class="bar-left">
      <div class="bar-left-item">
        <i class="icon people"></i>
        <p>客服</p>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <p>店铺</p>
      </div>
      <div class="bar-left-item">
        <i class="icon collection"></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-right">
      <div class="toCart" @click="toCart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      toCart(){
        this.$emit("toCart");
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    z-index: 10;
  }
  .bar-left {
    flex: 1;
    background-color: lemonchiffon;
    display: flex;
  }
  .bar-right {
    flex: 1;
  }
  .icon {
    background: url("../../../assets/images/detail/detail_bottom.png") no-repeat;
    background-size: 100%;
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 0;
  }
  .bar-left-item {
    flex: 1;
  }
  .bar-left-item p {
    text-align: center;
    color: #333;
    font-size: 15px;
  }
  .people {
    background-position: 0 -53px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .collection {
    background-position: 0 0;
  }
  .bar-right {
    display: flex;

  }
  .bar-right div {
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
  .bar-right .toCart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
    color: #fff;
  }
</style>