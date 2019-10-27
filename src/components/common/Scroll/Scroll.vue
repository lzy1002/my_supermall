<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    data() {
      return {
        BScroll: null
      }
    },
    props: {
      probetype: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      this.BScroll = new BScroll(".wrapper",{
        probeType: this.probetype,
        click: true,
        pullUpLoad: true
      });

      this.BScroll.on("scroll", (position) => {
        this.$emit("scrolling", position);
      });

      this.BScroll.on("pullingUp", () => {
        this.$emit("getMore");
        this.BScroll.finishPullUp();
      })
    },
    methods: {
      refresh(){
        this.BScroll.refresh();
      },
      scrollTo(x, y, time){
        this.BScroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>

</style>