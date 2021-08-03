<template>
  <view class="tea">
    <view class="tea-left">
      <image src="/static/logo.png" class="shop-img" />
    </view>
    <view class="tea-right">
      <view class="title">霸气金玉黄皮</view>
      <view class="special-box">
        <view class="special">当即上市</view>
        <view class="special">口感奇特干爽清甜</view>
        <view class="special">即点即取</view>
      </view>
      <view class="content">
        【350ml】一瓶有二宝，精选老广地区两款优质好皮制成。优选当季果中两个老师东方国际
      </view>
      <view class="price-box">
        <view class="price">￥29.00</view>
        <view class="btn">选规格</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  props: {},
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
.tea {
  width: 545rpx;
  height: 260rpx;
  background: #fff;
  margin-bottom: 45rpx;
  display: flex;
  flex-direction: row;
  .tea-left {
    margin-right: 50rpx;
    .shop-img {
      height: 150rpx;
      width: 150rpx;
    }
  }
  .tea-right {
    .title {
      font-size: 28rpx;
      color: #000;
      margin-bottom: 15rpx;
    }
    .special-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
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
    .content {
      @include xxl-ellipsis-two;
      color: #949799;
      font-size: 20rpx;
      margin-top: 5rpx;
    }
    .price-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 30rpx;
      .price {
        color: #000;
        font-size: 26rpx;
        font-weight: 600;
      }
      .btn {
        width: 115rpx;
        height: 50rpx;
        background: #a7d500;
        border-radius: 25rpx;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 22rpx;
        color: #fff;
      }
    }
  }
}
</style>