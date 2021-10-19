<template>
  <view class="mine">
    <view class="bg" @click="goToShop">
      <image src="/static/img_2.jpg" class="bg-img" />
    </view>
    <view class="box">
      <view class="top">
        <view class="myName" @click="goToUser">小溪流</view>
        <view class="mySlider" @click="goToUser">
          <view class="slider"></view>
          <view class="number">143/200</view>
        </view>
        <view class="myMembers" @click="goToUser">
          <view class="rank">V3</view>
          <view class="now">需57成长值升级V4</view>
        </view>
        <view class="myHeader" @click="goToUser">
          <image src="/static/img_3.jpg" class="header-img" />
        </view>
      </view>
      <view class="bottom">
        <view class="one main" @click="goToPrice">
          <view class="num">4</view>
          <view class="txt">优惠券</view>
        </view>
        <view class="two main" @click="gotoActive">
          <view class="num">576.5</view>
          <view class="txt">钱包余额（元）</view>
        </view>
        <view class="three mainn" @click="goToPrice">
          <view class="num">2000</view>
          <view class="txt">积分</view>
        </view>
      </view>
    </view>
    <view class="title">周周有礼</view>
    <view class="img-box" @click="goToShop">
      <image src="/static/img_4.jpg" class="banner" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      sliderNum: 30,
    }
  },
  mounted() {},
  onLoad() {},
  methods: {
    goToShop() {
      uni.switchTab({
        url: "/pages/eat/index",
      });
    },
    goToUser(){
      uni.navigateTo({
        url: "/pages/mine/user",
      });
    },
    goToMembers(){
      uni.navigateTo({
        url: "/pages/mine/members",
      });
    },
    goToPrice(){
      uni.navigateTo({
        url: "/pages/mine/price",
      });
    },
    gotoActive() {
      console.log('跳转活动页面')
      uni.navigateTo({
        url: '/pages/eat/money',
      })
    },
    goToMall(){
      uni.navigateTo({
        url: '/pages/home/bonusMall',
      })
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
.mine {
  color: #000;
  .bg {
    width: 750rpx;
    height: 640rpx;
    .bg-img {
      width: 750rpx;
      height: 640rpx;
    }
  }
  .box {
    height: 310rpx;
    width: 690rpx;
    border-radius: 20rpx;
    box-shadow: 0 10rpx 25rpx #ccc;
    margin: 0 auto;
    background: #fff;
    position: relative;
    top: -50rpx;
    .top {
      position: relative;
      padding: 15rpx 0 0 30rpx;
      .myName {
        color: #333333;
        font-size: 36rpx;
        margin-bottom: 10rpx;
      }
      .mySlider {
        display: flex;
        flex-direction: row;
        align-items: center;
        .slider {
          width: 320rpx;
          height: 8rpx;
          background: #009dff;
          margin-right: 15rpx;
          border-radius: 4rpx;
        }
        .number {
          font-size: 24rpx;
          color: #969798;
        }
      }
      .myMembers {
        display: flex;
        align-items: center;
        margin-top: 5rpx;
        .rank {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50rpx;
          width: 145rpx;
          border-radius: 25rpx;
          border: 1rpx solid #000;
          text-align: center;
          font-size: 24rpx;
          margin-right: 15rpx;
        }
        .now {
          font-size: 24rpx;
          color: #969798;
        }
      }
      .myHeader {
        height: 170rpx;
        width: 170rpx;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        right: 30rpx;
        top: -40rpx;
        .header-img {
          height: 170rpx;
          width: 170rpx;
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 30rpx;
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .num {
        margin-bottom: 15rpx;
        color: #333333;
        font-size: 36rpx;
        text-align: center;
      }
      .txt {
        font-size: 24rpx;
        color: #969798;
        text-align: center;
      }
    }
  }
  .title {
    margin-left: 30rpx;
    margin: -20rpx 0 15rpx 30rpx;
    font-size: 36rpx;
    line-height: 40rpx;
  }
  .img-box {
    width: 690rpx;
    height: 290rpx;
    border-radius: 20rpx;
    margin: 0 auto;
    margin-bottom: 20rpx;
    .banner {
      width: 690rpx;
      height: 290rpx;
      border-radius: 20rpx;
    }
  }
}
</style>
