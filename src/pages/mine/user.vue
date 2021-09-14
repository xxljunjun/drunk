<template>
  <view class="user">
    <Top title="用户信息" :isBack="true" />
    <view class="user-box">
      <ul>
        <li class="item">
          <span class="txt">头像</span>
           <image src="/static/logo.png" class="header" />
        </li>
        <li class="item">
          <span  class="txt">昵称</span>
          <span class="txt_1">小溪流 ></span>
        </li>
        <li class="item">
          <span  class="txt">性别</span>
          <span  class="txt_1">先生 ></span></span>
        </li>
         <li class="item">
          <span  class="txt">手机号</span>
          <span  class="txt_1">15363272121</span>
        </li>
        <li class="item">
          <span  class="txt">生日</span>
          <span  class="txt_1">完善生日，享生日好礼 ></span>
        </li>
        <li class="item">
          <span  class="txt">入会时间</span>
          <span  class="txt_1">2020-06-12 08:59:12</span>
        </li>
      </ul>
    </view>
     <view class="btn">保存</view>
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
.user {
  padding-top: 76rpx;
  background: #f4f4f4;
  height: 100vh;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .user-box {
    margin: 106rpx 30rpx 0;
    width: 690rpx;
    
    // height: 650rpx;
    background: #fff;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 105rpx;
      width: 100%;
      border-bottom: 1rpx solid #f4f4f4;
      padding: 0 40rpx;
      &:last-child {
        border-bottom: 0;
      }
      .header {
        border-radius: 50%;
        height: 60rpx;
        width: 60rpx;
      }
      .txt {
        font-size: 22rpx;
        color: #000;
      }
      .txt_1 {
        color: #959595;
        font-size: 22rpx;
      }
    }
  }
  .btn {
    width: 600rpx;
    height: 90rpx;
    border-radius: 45rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 90rpx;
    color: #000;
    font-size: 24rpx;
    margin: 290rpx auto 0;
    background: #a7d500;
  }
}
</style>