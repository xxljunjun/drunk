<template>
  <view class="eat">
    <view class="fixd">
      <view class="status_bar"> <!-- 这里是状态栏 --> </view>
      <view class="title"> 夏饮的茶 </view>
      <view class="location">
        <view class="location-left">
          <view class="txt-1">西丽宝能城店></view>
          <view class="txt-2">距离你669米</view>
        </view>
        <view class="location-right">
          <view class="txt-3">自取</view>
          <view class="txt-4">外卖</view>
        </view>
      </view>
      <view class="active">
        <view class="active-left">
          <image src="/static/logo.png" class="xing-icon" />
          <view class="txt">夏日限定：储值300元，立赠一杯</view>
        </view>
        <view class="active-right">{{ '>' }}</view>
      </view>
      <view class="discounts">
        <view class="discounts-left"> 外卖.牛轧糖买一送一 </view>
        <view class="discounts-right">查看更多</view>
      </view>
    </view>
    <Shop />
    <TabBar />
  </view>
</template>

<script>
import Shop from './components/shop.vue'
import TabBar from '@/components/tabBar.vue'
export default {
  data() {
    return {
      token: '',
    }
  },
  mounted() {},
  onLoad() {},
  methods: {},
  components: {
    TabBar,
    Shop,
  },
}
</script>

<style lang="scss" scoped>
.eat {
  color: #000;
  padding-top: 365rpx;
  .fixd {
    position: fixed;
    top: 0;
    background: #fff;
    //uniapp自带的变量控制状态栏
    .status_bar {
      height: var(--status-bar-height);
      width: 100%;
    }
    .title {
      margin: 0 auto;
      text-align: center;
      margin-top: 10rpx;
      margin-bottom: 30rpx;
    }
    .location {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15rpx;
      .location-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15rpx;
        .txt-1 {
          font-size: 28rpx;
          color: #000;
          margin-bottom: 20rpx;
          line-height: 28rpx;
        }
        .txt-2 {
          color: #a3a7a6;
          font-size: 20rpx;
          line-height: 20rpx;
        }
      }
      .location-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-right: 15rpx;
        color: #a0a5a8;
        width: 175rpx;
        height: 65rpx;
        background: #f5f5f5;
        border-radius: 45rpx;
        .txt-3 {
          width: 90rpx;
          height: 55rpx;
          background: #a7d500;
          border-radius: 25rpx;
          font-size: 22rpx;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .txt-4 {
          width: 90rpx;
          height: 55rpx;
          font-size: 22rpx;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .active {
      height: 70rpx;
      width: 750rpx;
      background: #f9fafc;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .active-left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 20rpx;
        .xing-icon {
          height: 40rpx;
          width: 40rpx;
          margin-right: 10rpx;
        }
        .txt {
          font-size: 22rpx;
          color: #9dc020;
        }
      }
      .active-right {
        margin-right: 20rpx;
      }
    }
    .discounts {
      height: 80rpx;
      width: 750rpx;
      background: #ffffff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .discounts-left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 20rpx;
        width: 200rpx;
        height: 40rpx;
        border: 2rpx solid #9dc020;
        border-radius: 10rpx;
        color: #9dc020;
        font-size: 18rpx;
      }
      .discounts-right {
        margin-right: 20rpx;
        color: #9dc020;
        font-size: 18rpx;
      }
    }
  }
}
</style>
