<template>
  <div class="detail-shop">
    <div class="title"><img :src="detailshop.shopLogo" alt=""><span>{{detailshop.name}}</span></div>
    <div class="info">
      <div class="info-left">
        <div class="info-left-div">
          <div>
            <p>{{detailshop.cSells | sellFilters}}</p>
            <p>总销量</p>
          </div>
          <div>
            <p>{{detailshop.cGoods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
      </div>
      <div class="info-right">
        <p v-for="(item, index) in detailshop.score">
          <span>{{item.name}}</span>
          <span :style="{color: item.isBetter ? 'lightcoral' : 'lightgreen'}">{{item.score}}</span>
          <span v-if="item.isBetter" class="high">高</span>
          <span v-else class="lose">低</span>
        </p>
      </div>
    </div>
    <div class="look">
      进店逛逛
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      detailshop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mounted() {
      console.log(this.detailshop);

    },
    filters: {
      sellFilters(value){
        return (value/10000).toFixed(1) + "万";
      }
    }
  }
</script>

<style scoped>
  .detail-shop {
    padding: 10px;
    color: #333;
  }

  .title {
    margin-bottom: 20px;
  }

  .title img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-right: 10px;
    vertical-align: middle;
  }

  .title span {
    font-size: 22px;
    vertical-align: middle;
    color: #666;
  }

  .info {
    display: flex;
  }

  .info-left, .info-right {
    flex: 1;
  }

  .info-left-div {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    border-right: 1px solid #ccc;
  }

  .info-left-div div p {
    text-align: center;
    line-height: 24px;
  }
  .high {
    background-color: lightcoral;
    color: #fff;
    padding: 0 1px;
    border-radius: 4px;
  }
  .lose {
    background-color: lightgreen;
    color: #fff;
    padding: 0 1px;
    border-radius: 4px;
  }
  .info-right p {
    line-height: 24px;
    text-align: center;
  }
  .info-right p span {
    margin-right: 8px;
  }
  .look {
    height: 28px;
    width: 100px;
    text-align: center;
    line-height: 28px;
    color: #fff;
    background-color: lightslategrey;
    border-radius: 6px;
    margin: 20px auto;
  }
</style>