<template>
  <view class="car">
    <view class="status_bar">
      夏饮的茶
      <!-- 这里是状态栏 -->
    </view>
    <view style="width: 750rpx" class="tab">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-width="140"
        active-color="#a7d500"
      ></u-tabs>
      <view class="one" v-if="current == 0"><CurrentSell /></view>
      <view class="two" v-else><HistorySell /></view>
    </view>
  </view>
</template>

<script>
import CurrentSell from "./components/currentSell.vue";
import HistorySell from "./components/historySell.vue";
export default {
  data() {
    return {
      list: [
        {
          name: "当前订单",
        },
        {
          name: "历史订单",
        },
      ],
      current: 0,
    };
  },
  mounted() {},
  onLoad() {},
  methods: {
    change(index) {
      this.current = index;
    },
  },
  components: {
    CurrentSell,
    HistorySell,
  },
};
</script>

<style lang="scss" scoped>
/deep/.u-tab-item {
  line-height: 60rpx !important;
}
.car {
  color: #000;
  //uniapp自带的变量控制状态栏
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 80rpx;
    margin-bottom: 30rpx;
    font-size: 28rpx;
    padding-left: 30rpx;
  }
  .tab {
    margin-top: 40rpx;
  }
}
</style>
