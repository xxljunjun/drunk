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
      >
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/logo.png" class="swiper-img" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">C</view>
        </swiper-item>
      </swiper>
    </view>
    <!-- <view class="box"></view>
    <view class="shop"></view>
    <view class="title">周周有礼</view>
    <view class="img-box"></view> -->
    <TabBar />
  </view>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
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
  methods: {},
  components: {
    TabBar,
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 100rpx;
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
      /deep/.uni-swiper-wrapper {
        .uni-swiper-dots {
          bottom: 200rpx;
          .uni-swiper-dot {
            width: 14rpx;
            height: 14rpx;
            margin-right: 16rpx;
          }
        }
      }
    }
  }
  .box {
    width: 690rpx;
    height: 310rpx;
    border-radius: 20rpx;
    box-shadow: 0 0 0 #000;
    background: blue;
    margin: 0 auto;
    position: relative;
    top: -50rpx;
    margin-bottom: 30rpx;
  }
  .shop {
    width: 690rpx;
    height: 170rpx;
    border-radius: 20rpx;
    background: blue;
    box-shadow: 0 0 0 #000;
    margin: 0 auto;
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
    background: yellow;
    margin: 0 auto;
  }
}
</style>
