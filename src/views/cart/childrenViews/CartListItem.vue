<template>
  <div class="cart-list-item">
    <div class="item-left">
      <cart-check-box :isChecked="cartlistitem.checked" @click.native="boxClick"></cart-check-box>
      <img :src="cartlistitem.image" alt="">
    </div>
    <div class="item-right">
      <p class="title">{{cartlistitem.title}}</p>
      <p class="desc">{{cartlistitem.desc}}</p>
      <div class="info"><span>￥{{cartlistitem.nowPrice}}</span><span>x{{cartlistitem.count}}</span></div>
    </div>
  </div>
</template>

<script>
  import CartCheckBox from "./CartCheckBox.vue";

  export default {
    name: "CartListItem",
    components: {
      CartCheckBox
    },
    props: {
      cartlistitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.cartlistitem);
    },
    methods: {
      boxClick(){
        // this.cartlistitem.checked = !this.cartlistitem.checked;
        this.$store.commit("changeChecked", this.cartlistitem.iid);
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    padding: 8px;
    display: flex;
    height: 130px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .item-left {
    flex: 30%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .item-left img {
    width: 80px;
    height: 100px;
    border-radius: 6px;
    margin-left: 8px;
  }
  .item-right {
    flex: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .title {
    font-size: 18px;
  }
  .desc {
    color: #666;
  }
  .info {
    display: flex;
    justify-content: space-between;
  }
</style>