<template>
  <view class="chooseShop">
    <u-popup v-model="isShow" mode="center" border-radius="20">
      <view class="main">
        <view class="title">请选择以下门店</view>
        <view class="line">
          <view class="box">
            <view class="choose">
              <image src="/static/choose-s.png" class="choose-img" />
            </view>
            <view class="txt">
              <view class="txt-1"> 深圳北站高铁站</view>
              <view class="txt-2">
                广东省深圳市龙华区深圳北高铁站内A区二楼【2-06】商铺</view
              >
            </view>
          </view>
        </view>
        <view class="btn-box">
          <view class="btn-left btn" @click="goToChoose">选择其他门店</view>
          <view class="btn-right btn" @click="comfire">确认</view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    comfire() {
      this.isShow = false
    },
    goToChoose() {
      console.log('跳转外卖页面')
      this.isSell = !this.isSell
      uni.navigateTo({
        url: '/pages/eat/sellLocation',
      })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.chooseShop {
  border-radius: 20rpx;
  .main {
    width: 600rpx;
    background: #fff;
    padding: 30rpx;
    .title {
      height: 120rpx;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 34rpx;
      font-weight: 700;
      color: #000;
    }
    .line {
      .box {
        width: 530rpx;
        height: 180rpx;
        margin-bottom: 20rpx;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        padding: 0 30rpx;
        .choose {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20rpx;
          .choose-img {
            height: 40rpx;
            width: 40rpx;
          }
        }
        .txt {
          display: flex;
          justify-content: center;
          flex-direction: column;
          .txt-1 {
            font-size: 28rpx;
            color: #000;
            margin-bottom: 10rpx;
          }
          .txt-2 {
            font-size: 22rpx;
            color: #626367;
            line-height: 30rpx;
          }
        }
      }
    }
    .btn-box {
      margin-top: 50rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .btn {
        width: 250rpx;
        height: 80rpx;
        border-radius: 40rpx;
        border: 1rpx solid #a7d500;
        font-size: 30rpx;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .btn-left {
        background: #fff;
        color: #a7d500;
      }
      .btn-right {
        background: #a7d500;
        color: #fff;
      }
    }
  }
}
</style>