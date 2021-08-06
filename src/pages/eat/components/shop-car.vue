<template>
  <view class="shop-car">
    <u-popup v-model="isShow" mode="bottom" border-radius="30" height="1000rpx">
      <view class="box">
        <view class="del-box" @click="delAllShop">
          <view class="img-box">
            <image src="/static/del.png" class="del-img" />
          </view>
          <view class="txt">清空购物车</view>
        </view>
        <view class="shop">
          <view class="aShop" v-for="(item, index) in 5" :key="index">
            <view class="aShop-left">
              <view class="img-box">
                <image src="/static/logo.png" class="shop-img" />
              </view>
              <view class="txt-box">
                <view class="txt-1">霸气金玉黄皮</view>
                <view class="txt-2">标准去冰/标准糖</view>
                <view class="txt-3">￥87.00</view>
              </view>
            </view>
            <view class="aShop-right">
              <view class="reduce">-</view>
              <view class="nums">1</view>
              <view class="add">+</view>
            </view>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    delAllShop() {
      console.log('删除所有')
      this.isShow = false
      this.$emit('update:shopCarStatus', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.shop-car {
  .box {
    padding-bottom: 120rpx;
    .del-box {
      height: 70rpx;
      width: 100%;
      background: #f9fafc;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      .img-box {
        .del-img {
          height: 25rpx;
          width: 25rpx;
        }
      }
      .txt {
        color: #68696d;
        font-size: 22rpx;
        margin: 0 40rpx 0 10rpx;
      }
    }
    .shop {
      padding-top: 70rpx;
      .aShop {
        height: 200rpx;
        width: 100%;
        border-bottom: 1rpx solid #ccc;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &:last-child {
          border-bottom: 0;
        }
        .aShop-left {
          display: flex;
          flex-direction: row;
          align-items: center;
          .img-box {
            margin-left: 30rpx;
            margin-right: 40rpx;
            .shop-img {
              height: 110rpx;
              width: 110rpx;
            }
          }
          .txt-box {
            display: flex;
            flex-direction: column;
            .txt-1 {
              color: #000;
              font-size: 30rpx;
              font-weight: 700;
              margin-bottom: 15rpx;
            }
            .txt-2 {
              font-size: 22rpx;
              color: #ccc;
              margin-bottom: 40rpx;
            }
            .txt-3 {
              font-size: 22rpx;
              color: #000;
            }
          }
        }
        .aShop-right {
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
    }
  }
}
</style>