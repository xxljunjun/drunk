<template>
  <view class="sellLocation">
    <Top title="我的地址" :isBack="true" />
    <view class="box" @click="goToShop">
      <view class="message">
        <view class="txt">
          <span class="default">默认</span>
          <span class="home">家</span>
          南景公寓南景新村
        </view>
        <view class="num">廖先生 先生 15363272121</view>
      </view>
      <view class="edit">
        <image src="/static/love.png" class="edit-img" />
      </view>
    </view>
    <view class="btn-box">
      <view class="btn left">
        <image src="/static/love.png" class="xing-icon" />
        <view>微信导入</view>
      </view>
      <view class="btn right">
        <image src="/static/left.png" class="xing-icon" />
        <view>新增地址</view>
      </view>
    </view>
  </view>
</template>

<script>
import Top from "@/components/top.vue";
export default {
  components: {
    Top,
  },
  methods:{
    goToShop() {
      uni.switchTab({
        url: "/pages/eat/index",
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.sellLocation {
  padding-top: 76rpx;
  height: 100vh;
  background: #f4f4f4;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .box {
    margin-left: 25rpx;
    margin-top: 100rpx;
    width: 700rpx;
    height: 150rpx;
    background: #fff;
    padding: 0 30rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .num {
      color: #8e8e8e;
      font-size: 24rpx;
    }
    .message {
      .txt {
        color: #000;
        font-weight: 600;
        font-size: 24rpx;
        margin-bottom: 15rpx;
        .default {
          height: 35rpx;
          width: 60rpx;
          font-size: 24rpx;
          border: 1rpx solid #a7d500;
          color: #a7d500;
          margin-right: 10rpx;
          padding: 5rpx 10rpx;
        }
        .home {
          height: 35rpx;
          font-size: 24rpx;
          width: 45rpx;
          border: 1rpx solid #1f6da9;
          color: #1f6da9;
          margin-right: 10rpx;
          padding: 5rpx 10rpx;
        }
      }
    }

    .edit-img {
      height: 30rpx;
      width: 30rpx;
    }
  }
  .btn-box {
    position: fixed;
    bottom: 25rpx;
    left: 25rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .xing-icon {
      height: 20rpx;
      width: 20rpx;
      margin-right: 20rpx;
    }
    .btn {
      width: 300rpx;
      height: 90rpx;
      border-radius: 45rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1rpx solid #a7d500;
    }
    .left {
      margin-right: 40rpx;
      background: #f4f4f4;
      color: #a7d500;
    }
    .right {
      background: #a7d500;
      color: #000;
    }
  }
}
</style>