<template>
  <view class="members">
    <Top title="会员权益" :isBack="true" />
    <view class="top">
      <viwe class="title">V2</viwe>
      <viwe class="rank">V2</viwe>
      <viwe class="txt">V2</viwe>
    </view>
  </view>
</template>

<script>
import Top from '@/components/top.vue'
export default {
  components: {
    Top,
  },
}
</script>

<style lang="scss" scoped>
.members {
  padding-top: 76rpx;
  background: #f4f6f5;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .top{
    margin-top: 65rpx;
    padding: 70rpx 30rpx 0;
    width: 100%;
    height: 360rpx;
    margin-bottom: 20rpx;
    background: #fff;
    .title{
      margin-bottom: 60rpx;
      color: #000;
      font-weight: 600;
    }
    .rank{

    }
    .txt{
      
    }
  }
}
</style>