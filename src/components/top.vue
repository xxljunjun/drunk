<template>
  <view class="top">
    <view class="status_bar"
      ><view class="left" v-if="isBack">
        <image src="/static/icons/back.png" class="back" @click="goToBack" />
      </view>
      <view class="title-box">
        {{ title }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isBack: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    goToBack() {
      uni.navigateBack({
        delta: 1,
      })
    },
    goToAdd() {
      uni.navigateTo({
        url: '/pages/component/home/addMachine',
      })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.top {
  height: 140rpx;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  //uniapp自带的变量控制状态栏
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 80rpx;
    font-size: 28rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    .left {
      margin-left: 30rpx;
      margin-right: 10rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .back {
        height: 40rpx;
        width: 40rpx;
      }
    }
    .title-box {
      font-size: 28rpx;
      color: #000;
    }
  }
}
</style>