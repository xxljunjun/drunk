<template>
  <view class="comfire-box">
    <u-popup v-model="isShow" mode="center" border-radius="20">
      <view class="comfire">
        <view class="title">{{ title }}</view>
        <view class="text">{{ text }}</view>
        <view class="btn-box">
          <view class="btn-left btn" @click="cancle"> 取消</view>
          <view class="btn-right btn" @click="comfire">确认 </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
//确认弹窗组件
export default {
  props: {
    title: {
      type: String,
      default: false,
    },
    text: {
      type: String,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    cancle() {
      console.log('取消')
      this.$emit('cancle')
      this.isShow = false
    },
    comfire() {
      console.log('确认')
      this.$emit('comfire')
      this.isShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
.comfire-box {
  .comfire {
    width: 670rpx;
    background: #fff;
    border-radius: 20rpx;
    box-sizing: border-box;
    padding-top: 70rpx;
    overflow: hidden;
    .title {
      margin: 0 0 50rpx;
      color: #000;
      font-size: 36rpx;
      text-align: center;
      font-weight: 700;
    }
    .text {
      margin-bottom: 70rpx;
      color: #737373;
      font-size: 32rpx;
      text-align: center;
    }
    .btn-box {
      border-top: 1rpx solid #ebebeb;
      display: flex;
      height: 110rpx;
      .btn-left {
        border-right: 1rpx solid #ebebeb;
        color: #000;
      }
      .btn-right {
        color: #a7d500;
      }
      .btn {
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 385rpx;
        height: 110rpx;
        font-size: 32rpx;
      }
    }
  }
}
</style>