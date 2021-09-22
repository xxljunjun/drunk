<template>
  <view class="box-location">
    <view class="left">
      <view class="txt-1"
        >民治1881MALL大夏店<span class="box">可外送</span></view
      >
      <view class="txt-2">
        <image src="/static/logo.png" class="logo_1" />
        <view>广东省深圳市龙华新区民治大道342号岁宝广场民治店118号商铺</view>
      </view>
      <view class="txt-3">
        <image src="/static/logo.png" class="logo_2" />
        <view> 营业时间:10:00-22:30</view>
      </view>
    </view>
    <view class="right">
      <view class="box-1">去下单</view>
      <view class="box-2">距离697m</view>
      <view class="box-3">
        <image src="/static/logo.png" class="logo_3" />
        <image src="/static/logo.png" class="logo_4" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.box-location {
  width: 710rpx;
  height: 250rpx;
  background: #fff;
  border: 1rpx solid #a7d500;
  box-sizing: border-box;
  padding: 45rpx 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  .left {
    border-right: 1rpx solid #d2d0d1;
    padding: 0 30rpx 0 35rpx;
    width: 510rpx;
    .txt-1 {
      margin-bottom: 30rpx;
      color: #000;
      font-size: 22rpx;
      .box {
        min-width: 60rpx;
        height: 30rpx;
        padding: 0 8rpx;
        text-align: center;
        line-height: 30rpx;
        background: #a7d500;
        margin-left: 20rpx;
        font-size: 12rpx;
      }
    }
    .txt-2 {
      font-size: 18rpx;
      color: #5f5f5f;
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;
      .logo_1 {
        height: 25rpx;
        width: 25rpx;
        margin-right: 20rpx;
      }
    }
    .txt-3 {
      font-size: 18rpx;
      color: #5f5f5f;
      display: flex;
      align-items: center;
      .logo_2 {
        height: 25rpx;
        width: 25rpx;
        margin-right: 20rpx;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 35rpx;
    .box-1 {
      color: #000;
      font-size: 22rpx;
      margin-bottom: 15rpx;
    }
    .box-2 {
      font-size: 18rpx;
      color: #5f5f5f;
      margin-bottom: 15rpx;
    }
    .box-3 {
      display: flex;
      align-items: center;
      justify-content: center;
      .logo_3 {
        height: 50rpx;
        width: 50rpx;
        margin-right: 25rpx;
      }
      .logo_4 {
        height: 50rpx;
        width: 50rpx;
      }
    }
  }
}
</style>