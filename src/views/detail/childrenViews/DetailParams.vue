<template>
  <div class="detail-params">
    <table class="rule" cellpadding="0" cellspacing="0">
      <tr v-for="(item, index) in detailparams.rule.tables[0]">
        <td v-for="item2 in item">{{item2}}</td>
      </tr>
    </table>
    <table class="info" cellpadding="0" cellspacing="0">
      <tr v-for="item in detailparams.info.set">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      detailparams: {
        type: Object,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log(this.detailparams);
    }
  }
</script>

<style scoped>
  .detail-params {
    padding: 5px;
  }
  .rule {
    width: 100%;
  }
  .rule tr td {
    width: 20%;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }
  .info td {
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }
  .info .key {
    width: 25%;
    text-align: center;
  }
  .info .value {
    color: lightcoral;
  }
</style>