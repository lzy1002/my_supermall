<template>
  <div class="cart-bottom-tool">
    <div class="option">
      <cart-check-box class="checkBox" :isChecked="isAllChecked" @click.native="changeAllChecked"></cart-check-box>
      全选
      <span class="reduce">合计: {{totalPrice}}</span>
    </div>
    <div class="goMath">
      去计算({{checkedGoods}})
    </div>
  </div>
</template>

<script>
  import CartCheckBox from "./CartCheckBox.vue";

  import {mapGetters} from "vuex";

  export default {
    name: "CartBottomTool",
    components: {
      CartCheckBox
    },
    computed: {
      ...mapGetters(["checkedGoods", "totalPrice", "isAllChecked"])
    },
    methods: {
      changeAllChecked(){
        this.$store.commit("changeAllChecked", !this.isAllChecked);
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-tool {
    width: 100%;
    height: 44px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: lightcoral;
    display: flex;
  }
  .option {
    flex: 1;
    display: flex;
    align-items: center;
    color: #333;
  }
  .checkBox {
    margin-right: 3px;
  }
  .reduce {
    margin-left: 30px;
  }
  .goMath {
    width: 100px;
    height: 44px;
    background-color: orangered;
    text-align: center;
    line-height: 44px;
    color: #fff;
  }
</style>