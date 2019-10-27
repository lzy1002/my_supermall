<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll">
      <detail-swiper v-if="topImages" :topImages="topImages"></detail-swiper>
    </scroll>
  </div>
</template>

<script>
  import {getDetailData} from "../../network/detail.js";

  import Scroll from "../../components/common/Scroll/Scroll.vue";

  import DetailNavBar from "./childrenViews/DetailNavBar.vue";
  import DetailSwiper from "./childrenViews/DetailSwiper.vue";

  export default {
    name: "Detail",
    data(){
      return {
        iid: null,
        topImages: null
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper
    },
    created(){
      this.iid = this.$route.params.iid;
      console.log(this.iid);
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    padding-top: 44px;
    /*padding-bottom: 49px;*/
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .scroll {
    height: 100%;
  }

</style>