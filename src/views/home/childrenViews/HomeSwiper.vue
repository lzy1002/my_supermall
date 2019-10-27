<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in bannerList">
        <a href="#">
          <img :src="item.image" alt="" @load="bannerImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/common/Swiper/index.js";

  export default {
    name: "HomeSwiper",
    data(){
      return {
        count: 0
      }
    },
    props: {
      bannerList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log(this.bannerList);
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      bannerImageLoad(){
        if(++this.count === this.bannerList.length){
          this.$emit("bannerImageLoad");
        }
      }
    }
  }
</script>

<style scoped>

</style>