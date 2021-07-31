<template>
  <view class="eat">
    <view class="status_bar"> <!-- 这里是状态栏 --> </view>
    <view class="title"> 夏饮的茶 </view>
    <view class="location">
      <view class="location-left">
        <view>西丽宝能城店></view>
        <view>距离你669米</view>
      </view>
      <view class="location-right"> </view>
    </view>
    <view class="active"> </view>
    <view class="discounts"> </view>
    <TabBar />
  </view>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
export default {
  data() {
    return {
      token: '',
    }
  },
  mounted() {},
  onLoad() {},
  methods: {},
  components: {
    TabBar,
  },
}
</script>

<style lang="scss" scoped>
.eat {
  color: #000;
  //uniapp自带的变量控制状态栏
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
  }
  .title {
    margin: 0 auto;
    text-align: center;
    margin-top: 10rpx;
    margin-bottom: 30rpx;
  }
}
</style>
