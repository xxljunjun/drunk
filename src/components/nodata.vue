<template>
  <view class="nodata-box">
    <view class="nodata">
      <img src="/static/icons/nodata.png" alt="" class="nodataImg" v-if="isgif" />
      <img src="/static/icons/nodata.png" alt="" class="nodataImg" v-else />
      <view  v-if="isgif">
        <view class="txt_1">你还没有点餐</view>
        <view class="txt_2">快去犒劳一下自己吧~</view>
      </view>
       <view class="txt_2" v-else-if="type ==='1'">还没有卡卷</view>
       <view class="txt_2" v-else>你还没有历史订单呦~</view>
      <view class="btn" @click="goToShop" v-if="type ==='2'">去点餐</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
      isgif:{
          type:Boolean,
          default:false
      },
      type:{
        type:String,
        default:'2',
      }
  },
  methods: {
    goToShop() {
      uni.switchTab({
        url: "/pages/eat/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.nodata-box {
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
      font-size: 14px;
    }
    .txt_2 {
      margin-bottom: 30px;
      color: #a3a7a6;
      font-size: 14px;
    }
    .btn {
      height: 40px;
      width: 150px;
      text-align: center;
      line-height: 40px;
      background: #a7d500;
      border-radius: 25px;
    }
  }
}
</style>