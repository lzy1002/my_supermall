<template>
  <div class="detail-images">
    <p class="desc">{{detailimages.desc}}</p>
    <img v-for="(item, index) in detailimages.detailImage[0].list" :src="item" alt="" @load="imageLoad">
  </div>
</template>

<script>
  export default {
    name: "DetailImages",
    data(){
      return {
        count: 0
      }
    },
    props: {
      detailimages: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.detailimages);
    },
    methods: {
      imageLoad(){
        if(++this.count === this.detailimages.detailImage[0].list.length){
          this.$emit("detailImageLoad");
        }
      }
    }
  }
</script>

<style scoped>
  .detail-images {
    padding: 5px;
  }
  .desc {
    line-height: 26px;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 3px solid #ccc;
  }
  .detail-images img {
    width: 100%;
  }
</style>