<template>
  <view class="money">
    <Top title="表盘市场" :isBack="true" />
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
.money {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
}
</style>