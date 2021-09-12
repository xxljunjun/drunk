<template>
  <view class="activeDetail">
    <Top title="活动详情" :isBack="true" />
    <view class="detial-box">
      <view class="detail">
        <view class="title"><span class="dot">·</span>活动时间</view>
        <view class="content">活动日期：2021-09-10 至 2021-09-25</view>
        <view class="content">活动日期：周一至周日5</view>
        <view class="content">全天</view>
      </view>
      <view class="detail">
        <view class="title"><span class="dot">·</span>活动优惠</view>
        <view class="content"
          >1.活动商品:霸气葡萄罐子蛋糕、霸气蜜桃罐子蛋糕、芋泥松;松罐子蛋糕、厚厚豆乳罐子、提拉米苏罐子蛋糕</view
        >
        <view class="content"
          >⒉.购买活动商品第二件立享5折优惠，同一订单中仅可优惠-件活动商品</view
        >
        <view class="content">
          3.本活动仅限【奈雪点单】小程序”自取”/"外卖"参与</view
        >
        <view class="content"
          >4.在活动期内不限参与次数，商品数量有限，售完即止</view
        >
        <view class="content">5.本活动不与其他活动和优惠券共享</view>
        <view class="content">6.更多详情请咨询店员</view>
        <view class="content"
          >1.活动商品:霸气葡萄罐子蛋糕、霸气蜜桃罐子蛋糕、芋泥松;松罐子蛋糕、厚厚豆乳罐子、提拉米苏罐子蛋糕
          
        </view>
        <view class="content">⒉.购买活动商品第二件立享5折优惠，同一订单中仅可优惠-件活动商品</view>
      </view>
      <view class="detail">
        <view class="title"><span class="dot">·</span>活动商品</view>
        <view class="content"
          >活适用商品:霸气葡萄罐子蛋糕、提拉米苏罐子蛋糕、厚厚豆乳罐子蛋糕、芋泥松松罐子蛋糕、霸气蜜桃罐子蛋糕</view
        >
      </view>
      <view class="detail">
        <view class="title"><span class="dot">·</span>补充说明</view>
        <view class="content"
          >本活动不与其他优惠活动共享，最终解释权归奈雪所有</view
        >
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
};
</script>

<style lang="scss" scoped>
.activeDetail {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .detial-box {
    margin-top: 76rpx;
    padding: 90rpx 25rpx 0;
    .detail {
      
      .title {
        font-size: 24rpx;
        color: #000;
        font-weight: 600;
        margin-bottom: 25rpx;
        .dot{
        font-size: 24rpx;
        color: #000;
        font-weight: 600;
        margin-right: 25rpx;
      }
      }
      .content {
        margin-bottom: 25rpx;
        font-size: 24rpx;
        color: #747474;
        margin-left: 34rpx;
      }
    }
  }
}
</style>