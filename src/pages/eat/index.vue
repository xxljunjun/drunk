<template>
  <view class="eat">
    <view class="mask" v-if="maskStatus" @click="goToclose"></view>
    <view class="fixd">
      <view class="status_bar"
        >夏饮的茶
        <!-- 这里是状态栏 -->
      </view>
      <view class="location">
        <view class="location-left" @click="goToMap">
          <view class="txt-1-box">
            <view class="txt-1">西丽宝能城店</view>
            <view class="arrow">
              <image src="/static/left.png" class="arrow-img" />
            </view>
          </view>
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
          <image src="/static/love.png" class="xing-icon" />
          <view class="txt">夏日限定：储值300元，立赠一杯</view>
        </view>
        <view class="active-right">
          <image src="/static/left.png" class="left-img" />
        </view>
      </view>
      <view class="discounts">
        <view class="discounts-left" v-if="!animationStatus" @click="toSeeMore">
          外卖.牛轧糖买一送一
        </view>
        <view
          class="discounts-right"
          v-if="!animationStatus"
          @click="toSeeMore"
        >
          <view>查看更多</view>
          <image src="/static/down.png" class="arrow" />
        </view>
        <view class="discounts-animation" v-if="animationStatus">
          <view class="jian">减</view>
          <view class="txt">限时.蛋糕卷第二件0元</view>
          <view class="look" @click="goToDetail">查看详情</view>
          <view class="circle">
            <image src="/static/down.png" class="arrow" />
          </view>
        </view>
      </view>
    </view>
    <view class="car-shop" v-if="shopCarStatus">
      <view class="car-shop-left">
        <view class="car-img-box" @click="popCar"
          ><image src="/static/love.png" class="car-img"
        /></view>

        <view class="price">￥140.00</view>
      </view>
      <view class="car-shop-right" @click="goToBuy">选好了</view>
    </view>
    <Shop :shopCarStatus.sync="shopCarStatus" />
    <ShopCar ref="shopCar" :shopCarStatus.sync="shopCarStatus" />
    <ChooseShop />
  </view>
</template>

<script>
import Shop from './components/shop.vue'
import ShopCar from './components/shop-car.vue'
import ChooseShop from './components/chooseShop.vue'
export default {
  components: {
    Shop,
    ShopCar,
    ChooseShop,
  },
  data() {
    return {
      shopCarStatus: false,
      animationStatus: false,
      token: '',
      isSell: true,
      isShow: false,
      maskStatus: false,
    }
  },
  mounted() {},
  onLoad() {
    uni.$on('updateNum', (data) => {
      this.shopCarStatus = true
      console.log('监听到事件来自 update ，携带参数 msg 为：' + data)
    })
  },
  methods: {
    goToBuy() {
      // uni.navigateTo({
      //   url: '/pages/eat/buy',
      // })
      uni.switchTab({
        url: '/pages/home/index',
      })
    },
    popCar() {
      console.log('弹出购物车')
      this.$refs.shopCar.isShow = !this.$refs.shopCar.isShow
    },
    goToMap() {
      console.log('跳转地图页面')
      uni.navigateTo({
        url: '/pages/eat/map',
      })
    },
    goToSell() {
      console.log('跳转外卖页面')
      this.isSell = !this.isSell
      uni.navigateTo({
        url: '/pages/eat/sellLocation',
      })
    },
    goToself() {
      this.isSell = !this.isSell
    },
    gotoActive() {
      console.log('跳转活动页面')
      uni.navigateTo({
        url: '/pages/eat/money',
      })
    },
    toSeeMore() {
      console.log('动画更多')
      this.animationStatus = true
      this.maskStatus = true
    },
    goToclose() {
      this.animationStatus = false
      this.maskStatus = false
    },
    goToDetail() {
      console.log('跳转地图页面')
      uni.navigateTo({
        url: '/pages/eat/activeDetail',
      })
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
  height: 100%;
  width: 100%;
  .mask {
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
  }
  .car-shop {
    position: fixed;
    bottom: 10rpx;
    left: 35rpx;
    width: 680rpx;
    height: 110rpx;
    z-index: 999999999999999999;
    border-radius: 55rpx;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 20rpx #ccc;
    .car-shop-left {
      width: 520rpx;
      height: 110rpx;
      background: #fff;
      border-radius: 55rpx 0 0 55rpx;
      display: flex;
      align-items: center;
      .car-img-box {
        margin-left: 60rpx;
        margin-right: 25rpx;
        position: relative;
        top: -25rpx;
        height: 90rpx;
        width: 80rpx;
        z-index: 99;
        .car-img {
          height: 90rpx;
          width: 80rpx;
        }
      }
      .price {
        color: #000;
        font-size: 30rpx;
        font-weight: 700;
      }
    }
    .car-shop-right {
      width: 160rpx;
      height: 110rpx;
      background: #a7d500;
      border-radius: 0 55rpx 55rpx 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26rpx;
      color: #fff;
    }
  }
  .fixd {
    position: fixed;
    top: 0;
    z-index: 9;
    background: #fff;
    //uniapp自带的变量控制状态栏
    .status_bar {
      height: var(--status-bar-height);
      width: 100%;
      margin: 0 auto;
      text-align: center;
      margin-top: 80rpx;
      margin-bottom: 30rpx;
      font-size: 28rpx;
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
        .txt-1-box {
          margin-bottom: 20rpx;
          display: flex;
          align-items: center;
          .arrow {
            margin-left: 10rpx;
            .arrow-img {
              height: 20rpx;
              width: 20rpx;
            }
          }
          .txt-1 {
            font-size: 28rpx;
            color: #000;

            line-height: 28rpx;
          }
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
        .left-img {
          width: 20rpx;
          height: 20rpx;
        }
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
        font-size: 22rpx;
        display: flex;
        align-items: center;
        .arrow {
          height: 20rpx;
          width: 20rpx;
          margin-left: 10rpx;
        }
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
