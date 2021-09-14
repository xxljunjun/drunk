<template>
  <view class="home">
    <view class="banner-swiper">
      <swiper
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :circular="true"
        indicator-color="rgba(255, 255, 255, 0.4)"
        indicator-active-color="rgba(255, 255, 255, 1)"
         @click="goToShop"
      >
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/logo.png" class="swiper-img" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/logo.png" class="swiper-img" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/logo.png" class="swiper-img" />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="box">
      <view class="box-left" @click="goToShop">
        <image src="/static/logo.png" class="bao" />
        <view class="txt-1">自取</view>
        <view class="txt-2">在线点，到店取</view>
      </view>
      <view class="box-right"  @click="goToShop">
        <image src="/static/logo.png" class="car" />
        <view class="txt-1">外送</view>
        <view class="txt-2">轻松点，送到家</view>
      </view>
    </view>
    <view class="shop">
      <view class="shop-left" @click="goToMall">
        <image src="/static/logo.png" class="money" />
        <view class="txt">
          <view class="txt-1">积分商城</view>
          <view class="txt-2">兑换潮流周边</view>
        </view>
      </view>
      <view class="shop-right"  @click="gotoActive">
        <image src="/static/logo.png" class="biao" />
        <view class="txt">
          <view class="txt-1">亦.会员</view>
          <view class="txt-2">更多会员权益</view>
        </view>
      </view>
    </view>
    <view class="title">周周有礼</view>
    <view class="img-box"  @click="goToShop">
      <image src="/static/logo.png" class="banner" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      duration: 500,
      interval: 2000,
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
  components: {},
}
</script>

<style lang="scss" scoped>
.home {
  color: #000;
  .banner-swiper {
    height: 640rpx;
    width: 750rpx;
    .swiper {
      height: 640rpx;
      .swiper-item {
        .swiper-img {
          height: 640rpx;
          width: 750rpx;
        }
      }
    }
  }
  .box {
    width: 690rpx;
    height: 310rpx;
    border-radius: 20rpx;
    box-shadow: 0 10rpx 25rpx #ccc;
    margin: 0 auto;
    position: relative;
    top: -50rpx;
    margin-bottom: 30rpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50rpx 0;
    box-sizing: border-box;
    background: #fff;
    .box-left {
      border-right: 1px solid #dbdbdb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 345rpx;
    }
    .box-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 345rpx;
    }
    .bao {
      height: 110rpx;
      width: 110rpx;
      margin-bottom: 20rpx;
    }
    .car {
      height: 110rpx;
      width: 110rpx;
      margin-bottom: 16rpx;
    }
    .txt-1 {
      font-size: 40rpx;
      font-size: #000;
      margin-bottom: 10rpx;
      line-height: 46rpx;
    }
    .txt-2 {
      font-size: 26rpx;
      line-height: 32rpx;
      color: #a7d500;
    }
  }
  .shop {
    width: 690rpx;
    height: 170rpx;
    border-radius: 20rpx;
    background: #fff;
    box-shadow: 0 10rpx 25rpx #ccc;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50rpx 0;
    .txt-1 {
      font-size: 36rpx;
      line-height: 40rpx;
      color: #000;
      margin-bottom: 5rpx;
    }
    .txt-2 {
      font-size: 26rpx;
      line-height: 30rpx;
      color: #969798;
    }
    .shop-left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 345rpx;
      border-right: 1px solid #dbdbdb;
      .money {
        height: 65rpx;
        width: 65rpx;
        margin-right: 16rpx;
      }
    }
    .shop-right {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 345rpx;
      .biao {
        height: 65rpx;
        width: 65rpx;
        margin-right: 16rpx;
      }
    }
  }
  .title {
    margin-left: 30rpx;
    margin: 30rpx 0 15rpx 30rpx;
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
