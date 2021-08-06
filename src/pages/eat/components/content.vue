<template>
  <view class="content">
    <view class="title">霸气龙眼</view>
    <view class="special-box">
      <view class="special">当即上市</view>
      <view class="special">口感奇特干爽清甜</view>
      <view class="special">即点即取</view>
    </view>
    <view class="text"
      >【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际</view
    >
    <view class="box" v-for="(item, index) in 4" :key="index">
      <view class="line">加料</view>
      <view class="add-box">
        <view class="add">燃爆菌￥4.00</view>
        <view class="add">0卡糖（0卡0脂肪￥1.00</view>
        <view class="add">Q弹脆珍珠￥3.00</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
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
.content {
  padding: 0 30rpx;
  .title {
    margin-top: 30rpx;
    font-weight: 700;
    font-size: 28rpx;
    color: #000;
  }
  .special-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15rpx 0 20rpx;
    .special {
      width: auto;
      height: 35rpx;
      background: #fbf2f3;
      color: #eea3b2;
      font-size: 20rpx;
      margin-right: 10rpx;
      padding: 0 10rpx;
      margin-bottom: 10rpx;
    }
  }
  .text {
    margin-bottom: 70rpx;
    color: #646568;
    font-size: 22rpx;
    white-space: wrap;
  }
  .box {
    .line {
      font-size: 22rpx;
      color: #000;
    }
    .add-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 15rpx 0 20rpx;
      .add {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 65rpx;
        background: #f6f6f6;
        color: #626367;
        font-size: 20rpx;
        margin-right: 20rpx;
        padding: 0 30rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>