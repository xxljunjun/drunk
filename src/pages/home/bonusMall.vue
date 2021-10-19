<template>
  <view class="mall">
    <Top title="积分商城" :isBack="true" />
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
.mall {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
}
</style>