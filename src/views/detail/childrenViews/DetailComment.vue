<template>
  <div class="detail-comment">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="content">
      <div class="user"><img :src="detailcomment.user.avatar" alt=""><span>{{detailcomment.user.uname}}</span></div>
      <p class="message">{{detailcomment.content}}</p>
      <p class="params"><span>{{detailcomment.created | dateFilters}}</span><span>{{detailcomment.style}}</span></p>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils.js";

  export default {
    name: "DetailComment",
    props: {
      detailcomment: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.detailcomment);
    },
    filters: {
      dateFilters(value){
        const date = new Date(value * 1000);
        return formatDate(date, "yyyy-MM-dd");
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 20px 5px;
    border-bottom: 5px solid #eee;
  }
  .title {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .content {
    padding: 3px;
  }
  .content .user {
    margin: 10px 0;
  }
  .content .user img {
    width: 45px;
    border-radius: 50%;
    border: 1px solid lightcoral;
    vertical-align: middle;
    margin-right: 10px;
  }
  .content .user span {
    font-size: 16px;
    vertical-align: middle;
    color: #333;
  }
  .content .message {
    font-size: 16px;
    color: #333;
    margin-bottom: 14px;
  }
  .content .params {
    color: #333;
  }
  .content .params span {
    margin-right: 10px;
  }
</style>