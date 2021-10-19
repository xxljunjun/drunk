<template>
  <view class="currentSell">
    <Nodata :isgif="true" />
  </view>
</template>

<script>
import Nodata from "@/components/nodata.vue";
export default {
  data() {
    return {};
  },
  components: {
    Nodata,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.currentSell {
  .nodata {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .nodataImg {
      height: 150px;
      width: 150px;
      margin-top: 100px;
      margin-bottom: 30px;
    }
    .txt_1 {
      margin-bottom: 10px;
      color: #a3a7a6;
      font-size: 20px;
    }
    .txt_2 {
      margin-bottom: 30px;
      color: #a3a7a6;
      font-size: 20px;
    }
    .btn {
      height: 50px;
      width: 150px;
      text-align: center;
      line-height: 50px;
      background: #a7d500;
      border-radius: 25px;
    }
  }
}
</style>