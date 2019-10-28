<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control v-show="tabControlIsShow" ref="tabControl2" class="topTabControl" :tabs="[{type: 'pop', title:'流行'}, {type: 'new', title:'新款'}, {type: 'sell', title:'精选'}]" @changeType="changeType"></tab-control>
    <scroll ref="scroll" class="scroll" :probetype="3" @getMore="getMore" @scrolling="scrolling">
      <home-swiper v-if="banner" :bannerList="banner" @bannerImageLoad="bannerImageLoad"></home-swiper>
      <home-recommend v-if="recommend" :recommendList="recommend"></home-recommend>
      <home-feature @featureImageLoad="featureImageLoad"></home-feature>
      <tab-control ref="tabControl" :tabs="[{type: 'pop', title:'流行'}, {type: 'new', title:'新款'}, {type: 'sell', title:'精选'}]" @changeType="changeType"></tab-control>
      <goods-list :goodslist="goodsList[goodsType].list"></goods-list>

    </scroll>
    <back-top v-show="backTopIsShow" @click.native="goTop"></back-top>
  </div>
</template>

<script>
  import {getHomeMultidata, getGoodsData} from "../../network/home.js";

  import {deBounce} from "../../common/utils.js";

  import NavBar from "../../components/common/NavBar/NavBar.vue";
  import Scroll from "../../components/common/Scroll/Scroll.vue";

  import TabControl from "../../components/content/TabControl/TabControl.vue";
  import GoodsList from "../../components/content/GoodsList/GoodsList.vue";
  import BackTop from "../../components/content/BackTop/BackTop.vue";

  import HomeSwiper from "./childrenViews/HomeSwiper.vue";
  import HomeRecommend from "./childrenViews/HomeRecommend.vue";
  import HomeFeature from "./childrenViews/HomeFeature.vue";

  export default {
    name: "Home",
    data(){
      return {
        banner: null,
        recommend: null,
        goodsList: {
          "pop": {page: 0, list: []},
          "new": {page: 0, list: []},
          "sell": {page: 0, list: []}
        },
        goodsType: "pop",
        position: {x: 0, y: 0},
        bannerImgIsOk: false,
        featureImgIsOk: false,
        tabControlTop: null,
        leaveY: 0,
        ref: null,
        loadFn: null
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,

    },
    created(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });

      this.getGoodsData("pop");
      this.getGoodsData("new");
      this.getGoodsData("sell");
    },
    mounted(){
      this.ref = deBounce(this.$refs.scroll.refresh, 300);
      this.loadFn = () => {
        this.ref();
      }

      // this.$bus.$on("imageLoad", () => {
      //   this.ref();
      // });
    },
    activated(){

      this.$bus.$on("imageLoad", this.loadFn);

      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.leaveY, 0);
    },
    deactivated(){
      this.leaveY = this.position.y;
      this.$bus.$off("imageLoad", this.loadFn);
    },
    methods: {
      getGoodsData(type){
        let page = this.goodsList[type].page + 1;
        getGoodsData(type, page).then(res => {
          this.goodsList[type].list.push(...res.data.list);
        });
        this.goodsList[type].page = page;
      },
      changeType(type, index){
        this.goodsType = type;
        this.$refs.tabControl.tabsIndex = index;
        this.$refs.tabControl2.tabsIndex = index;
      },
      getMore(){
        this.getGoodsData(this.goodsType);
        console.log("上拉加载更多");
      },
      scrolling(position){
        this.position = position;
      },
      bannerImageLoad(){
        this.bannerImgIsOk = true;
        if(this.bannerImgIsOk && this.featureImgIsOk){
          this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
        }
      },
      featureImageLoad(){
        this.featureImgIsOk = true;
        if(this.bannerImgIsOk && this.featureImgIsOk){
          this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
        }
      },
      goTop(){
        this.$refs.scroll.scrollTo(0, 0, 1000);
      }
    },
    computed: {
      tabControlIsShow(){
        return this.position.y <= -this.tabControlTop+44;
      },
      backTopIsShow(){
        return this.position.y <= -1000;
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: lightpink;
  }
  .home {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    background-color: #fff;
  }
  .scroll {
    height: 100%;
    width: 100%;
  }
  .topTabControl {
    position: fixed;
    z-index: 9;
  }
</style>