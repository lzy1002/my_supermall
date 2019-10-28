<template>
  <div class="detail-info">
    <h3 class="title">{{detailinfo.title}}</h3>
    <p class="price"><span class="nowPrice">￥{{detailinfo.lowNowPrice}}</span><span class="oldPrice">￥{{detailinfo.highPrice}}</span><span class="discountDesc">{{detailinfo.discountDesc}}</span></p>
    <div class="message">
      <span v-for="(item, index) in detailinfo.columns.length-1">{{detailinfo.columns[item-1]}}</span><span>{{detailinfo.services[detailinfo.services.length-1].name}}</span>
    </div>
    <div class="privilege">
      <p v-for="(item, index) in detailinfo.services.length-1"><img :src="detailinfo.services[item-1].icon" alt=""><span>{{detailinfo.services[item-1].name}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailinfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.detailinfo);
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 3px;
  }
  .title {
    color: #666;
    line-height: 26px;
  }
  .price {
    margin-top: 10px;
  }
  .price span {
    margin-right: 5px;
  }
  .price .nowPrice {
    font-size: 30px;
    font-weight: 700;
    color: lightcoral;
  }
  .price .oldPrice {
    color: #666;
    text-decoration: line-through;
  }
  .price .discountDesc {
    background-color: lightcoral;
    color: #fff;
    padding: 0 2px;
    border-radius: 6px;
    font-size: 14px;
  }
  .message {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 5px;
    color: #666;
    border-bottom: 1px solid #ccc;
  }
  .privilege {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 5px solid #eee;
  }
  .privilege p img {
    width: 16px;
    vertical-align: middle;
  }
</style>