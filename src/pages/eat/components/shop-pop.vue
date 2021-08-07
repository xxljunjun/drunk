<template>
  <view class="shop-pop">
    <u-popup v-model="isShow" mode="center">
      <view class="box">
        <view class="close-box">
          <image src="/static/share.png" class="share" @click="goToShare" />
          <image src="/static/close.png" class="close" @click="gotoClose" />
        </view>
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
        </swiper>
        <view class="content">
          <scroll-view scroll-y="true">
            <Content />
          </scroll-view>
        </view>
        <view class="price-box">
          <view class="price-left">
            <view class="price">￥29.00</view>
            <view class="descrition"
              >【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。</view
            >
          </view>
          <view class="price-right">
            <view class="reduce" @click="toReduce">-</view>
            <view class="nums">{{ shopNum }}</view>
            <view class="add" @click="toAdd">+</view>
          </view>
        </view>
        <view class="btn-box" @click="addToShop"> 加入购物车 </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import Content from './content.vue'
export default {
  components: {
    Content,
  },
  props: {},
  data() {
    return {
      isShow: false,
      indicatorDots: false,
      autoplay: true,
      duration: 500,
      interval: 2000,
      shopNum: 1,
    }
  },
  methods: {
    goToShare() {
      console.log('去分享')
    },
    gotoClose() {
      console.log('去关闭')
      this.isShow = false
    },
    toReduce() {
      if (this.shopNum == 1) {
        return
      }
      this.shopNum--
    },
    toAdd() {
      this.shopNum++
    },
    addToShop() {
      this.isShow = false
      uni.$emit('updateNum', true)
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes xxl-scroll {
  from {
    height: 0;
    display: none;
  }
  to {
    height: 630rpx;
    display: block;
    overflow: auto;
  }
}
@mixin xxl-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@mixin xxl-ellipsis-two {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  word-break: break-word;
}
scroll-view {
  height: 630rpx;
  animation: xxl-scroll 0.3s linear 0s 1;
}
.shop-pop {
  .box {
    width: 690rpx;
    background: #fff;
    position: relative;
    .swiper {
      .swiper-item {
        height: 380rpx;
        width: 690rpx;
        .swiper-img {
          height: 380rpx;
          width: 690rpx;
        }
      }
    }
    .close-box {
      position: absolute;
      top: 35rpx;
      right: 40rpx;
      z-index: 99;
      .share {
        height: 35rpx;
        width: 35rpx;
      }
      .close {
        height: 35rpx;
        width: 35rpx;
        margin-left: 50rpx;
      }
    }
    .content {
    }
    .price-box {
      height: 135rpx;
      width: 690rpx;
      background: #f9fafe;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .price-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30rpx;
        width: 450rpx;
        .price {
          color: #000;
          margin-bottom: 15rpx;
          font-weight: 700;
        }
        .descrition {
          color: #ccc;
          @include xxl-ellipsis;
        }
      }
      .price-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 30rpx;
        .reduce {
          height: 50rpx;
          width: 50rpx;
          border-radius: 50%;
          border: 1rpx solid #c4c5c8;
          color: #c4c5c8;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nums {
          color: #c4c5c8;
          font-size: 22rpx;
          margin: 0 20rpx;
        }
        .add {
          height: 50rpx;
          width: 50rpx;
          border-radius: 50%;
          border: 1rpx solid #c4c5c8;
          color: #fff;
          background: #a7d500;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .btn-box {
      height: 90rpx;
      width: 750rpx;
      background: #a7d500;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 26rpx;
      font-weight: 700;
    }
  }
}
</style>