<template>
  <view class="tabBar">
    <view class="item" @click="goToTabBar(0)">
      <image src="/static/logo.png" class="icon" />
      <view class="txt">首页</view>
    </view>
    <view class="item" @click="goToTabBar(1)">
      <image src="/static/logo.png" class="icon" />
      <view class="txt">点餐</view>
    </view>
    <view class="item" @click="goToTabBar(2)">
      <image src="/static/logo.png" class="icon" />
      <view class="txt">订单</view>
    </view>
    <view class="item" @click="goToTabBar(3)">
      <image src="/static/logo.png" class="icon" />
      <view class="txt">我的</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToTabBar(num) {
      let url = ''
      switch (num) {
        case 0:
          url = '/pages/home/index'
          break
        case 1:
          url = '/pages/eat/index'
          break
        case 2:
          url = '/pages/car/index'
          break
        case 3:
          url = '/pages/mine/index'
          break
        default:
          break
      }
      uni.navigateTo({
        url: url,
        animationType: 'zoom-in',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.tabBar {
  height: 100rpx;
  width: 750rpx;
  background: blue;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  .item {
    .icon {
      width: 36rpx;
      height: 36rpx;
      margin-bottom: 8rpx;
    }
    .txt {
      font-size: 22rpx;
      color: #000;
    }
  }
}
</style>