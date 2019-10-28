<template>
  <div class="detail">
    <detail-nav-bar @itemClick="itemClick" ref="navbar"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scrolling="scrolling">
      <detail-swiper v-if="topImages" :topImages="topImages"></detail-swiper>
      <detail-info v-if="goods" :detailinfo="goods"></detail-info>
      <detail-shop v-if="shops" :detailshop="shops"></detail-shop>
      <detail-images v-if="infoImages" :detailimages="infoImages" @detailImageLoad="detailImageLoad"></detail-images>
      <detail-params ref="params" v-if="itemParams" :detailparams="itemParams"></detail-params>
      <detail-comment ref="comment" v-if="rate" :detailcomment="rate"></detail-comment>
      <detail-goods-list ref="goodslist" v-if="goodsList" :goodsList="goodsList"></detail-goods-list>
    </scroll>
    <detail-bottom-bar @toCart="toCart"></detail-bottom-bar>
    <back-top v-show="backTopIsShow" @click.native="goTop"></back-top>
  </div>
</template>

<script>
  import {deBounce} from "../../common/utils.js";

  import {getDetailData, Goods, Shops, getRecommend} from "../../network/detail.js";

  import Scroll from "../../components/common/Scroll/Scroll.vue";

  import BackTop from "../../components/content/BackTop/BackTop.vue";

  import DetailNavBar from "./childrenViews/DetailNavBar.vue";
  import DetailSwiper from "./childrenViews/DetailSwiper.vue";
  import DetailInfo from "./childrenViews/DetailInfo.vue";
  import DetailShop from "./childrenViews/DetailShop.vue";
  import DetailImages from "./childrenViews/DetailImages.vue";
  import DetailParams from "./childrenViews/DetailParams.vue";
  import DetailComment from "./childrenViews/DetailComment.vue";
  import DetailGoodsList from "./childrenViews/DetailGoodsList.vue";
  import DetailBottomBar from "./childrenViews/DetailBottomBar.vue";

  export default {
    name: "Detail",
    data(){
      return {
        iid: null,
        topImages: null,
        goods: null,
        shops: null,
        infoImages: null,
        itemParams: null,
        rate: null,
        goodsList: null,
        ref: null,
        loadFn: null,
        comTops: [],
        currentIndex: null,
        position: {x: 0, y: 0}
      }
    },
    components: {
      Scroll,
      BackTop,
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailShop,
      DetailImages,
      DetailParams,
      DetailComment,
      DetailGoodsList,
      DetailBottomBar
    },
    created(){
      this.iid = this.$route.params.iid;
      console.log(this.iid);
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(res.result.columns, res.result.itemInfo, res.result.shopInfo);
        this.shops = new Shops(res.result.shopInfo);
        this.infoImages = res.result.detailInfo;
        this.itemParams = res.result.itemParams;
        this.rate = res.result.rate.list[0];
      });

      getRecommend().then(res => {
        this.goodsList = res.data.list;
      })
    },
    mounted(){
      this.ref = deBounce(this.$refs.scroll.refresh, 300);
      this.loadFn = () => {
        this.ref();
      };
      this.$bus.$on("imageLoad", this.loadFn);
    },
    destroyed(){
      this.$bus.$off("imageLoad", this.loadFn);
    },
    methods: {
      detailImageLoad(){
        this.$refs.scroll.refresh();
        this.comTops.push(0);
        this.comTops.push(this.$refs.params.$el.offsetTop - 44);
        this.comTops.push(this.$refs.comment.$el.offsetTop - 44);
        this.comTops.push(this.$refs.goodslist.$el.offsetTop - 44);
      },
      itemClick(index){
        this.$refs.scroll.scrollTo(0, -this.comTops[index], 1000);
      },
      scrolling(position){
        this.position = position;
        let y = position.y;
        for(let i = 0; i< this.comTops.length; i++){
          if(this.currentIndex !== i &&((y <= -this.comTops[i] && y > -this.comTops[i+1]) || (y <= -this.comTops[this.comTops.length-1] && i === this.comTops.length-1))){
            this.currentIndex = i;
            this.$refs.navbar.itemIndex = i;
          }
        }
      },
      goTop(){
        this.$refs.scroll.scrollTo(0, 0, 1000);
      },
      toCart(){
        let obj = {};
        obj.image = this.topImages[0];
        obj.title = this.goods.title;
        obj.desc = this.goods.desc;
        obj.nowPrice = this.goods.lowNowPrice;
        obj.iid = this.$route.params.iid;
        console.log(obj);

        this.$store.dispatch("addGoods", obj);
      }
    },
    computed: {
      backTopIsShow(){
        return this.position.y < -1000;
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .scroll {
    height: 100%;
    overflow: hidden;
  }

</style>
