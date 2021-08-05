<template>
  <view class="eat">
    <view class="fixd">
      <view class="status_bar"> <!-- 这里是状态栏 --> </view>
      <view class="title"> 夏饮的茶 </view>
      <view class="location">
        <view class="location-left" @click="goToMap">
          <view class="txt-1">西丽宝能城店></view>
          <view class="txt-2">距离你669米</view>
        </view>
        <view class="location-right">
          <view class="txt-3" :class="{ active: isSell }" @click="goToself"
            >自取</view
          >
          <view class="txt-4" :class="{ active: !isSell }" @click="goToSell"
            >外卖</view
          >
        </view>
      </view>
      <view class="active" @click="gotoActive">
        <view class="active-left">
          <image src="/static/logo.png" class="xing-icon" />
          <view class="txt">夏日限定：储值300元，立赠一杯</view>
        </view>
        <view class="active-right">{{ '>' }}</view>
      </view>
      <view class="discounts">
        <view class="discounts-left" v-if="!animationStatus">
          外卖.牛轧糖买一送一
        </view>
        <view class="discounts-right" @click="toSeeMore" v-if="!animationStatus"
          >查看更多</view
        >
        <view
          class="discounts-animation"
          v-if="animationStatus"
          @click="goToclose"
        >
          <view class="jian">减</view>
          <view class="txt">限时.蛋糕卷第二件0元</view>
          <view class="look">查看详情</view>
          <view class="circle">
            <image src="/static/logo.png" class="arrow" />
          </view>
        </view>
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
  components: {
    TabBar,
    Shop,
  },
  data() {
    return {
      animationStatus: false,
      token: '',
      isSell: true,
      isShow: false,
    }
  },
  mounted() {},
  onLoad() {},
  methods: {
    goToMap() {
      console.log('跳转地图页面')
    },
    goToSell() {
      console.log('跳转外卖页面')
      this.isSell = !this.isSell
    },
    goToself() {
      this.isSell = !this.isSell
    },
    gotoActive() {
      console.log('跳转活动页面')
    },
    toSeeMore() {
      console.log('动画更多')
      this.animationStatus = true
    },
    goToclose() {
      this.animationStatus = false
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes zero-height {
  0% {
    height: 0;
  }
  25% {
    height: 20rpx;
  }
  50% {
    height: 40rpx;
  }
  75% {
    height: 60rpx;
  }
  100% {
    height: 80rpx;
  }
}
.eat {
  color: #000;
  padding-top: 420rpx;
  .fixd {
    position: fixed;
    top: 0;
    z-index: 99;
    background: #fff;
    //uniapp自带的变量控制状态栏
    .status_bar {
      height: var(--status-bar-height);
      width: 100%;
      margin-top: 40rpx;
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
      margin-bottom: 30rpx;
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
        .active {
          background: #a7d500;
          color: #fff;
        }
        .txt-3 {
          width: 90rpx;
          height: 55rpx;
          border-radius: 25rpx;
          font-size: 22rpx;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-left: 10rpx;
        }
        .txt-4 {
          width: 90rpx;
          height: 55rpx;
          font-size: 22rpx;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-right: 10rpx;
          border-radius: 25rpx;
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
          background: #f4fcff;
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
      position: relative;
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
      .discounts-animation {
        position: absolute;
        top: 0;
        width: 750rpx;
        background: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 22rpx;
        // animation: zero-height 0.6s linear 0s 1;
        animation-name: zero-height;
        animation-duration: 0.3s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-play-state: running;
        animation-fill-mode: forwards;
        .jian {
          height: 40rpx;
          width: 40rpx;
          background: #a7d500;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 12rpx 0 35rpx;
        }
        .txt {
          color: #000;
          margin-right: 20rpx;
        }
        .look {
          color: #a7d500;
        }
        .circle {
          height: 60rpx;
          width: 60rpx;
          background: #fff;
          border-radius: 50%;
          position: relative;
          bottom: -50rpx;
          left: -50rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          .arrow {
            height: 30rpx;
            width: 30rpx;
          }
        }
      }
    }
  }
}
</style>
