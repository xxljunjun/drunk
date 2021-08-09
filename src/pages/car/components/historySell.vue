<template>
  <view class="historySell">
    <view style="width: 750rpx" class="tab">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-width="60"
        active-color="#a7d500"
        bg-color="#f3f4f8"
        height="110"
      ></u-tabs>
      <view class="one" v-if="current == 0">
          <view v-for="(item,index) in 2" :key="index" class="item">

          </view>
      </view>
      <view class="two" v-if="current == 1">22222222222222</view>
      <view class="threen" v-if="current == 2">22222222222222</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "全部",
        },
        {
          name: "自取",
        },
        {
          name: "外卖",
        },
      ],
      current: 0,
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.u-tab-item {
  position: relative !important;
  top: 10rpx !important;
}
.u-tab-bar {
  margin-bottom: 20rpx !important;
}
.historySell {
  /deep/.u-tab-item {
    position: relative !important;
    top: 10rpx !important;
  }
  /deep/.u-tab-bar {
    margin-bottom: 20rpx !important;
  }
}
.one,.two,.threen{
    padding: 0 20rpx;
    background: #f3f4f8;
}
.item{
    height: 370rpx;
    width: 700rpx;
    background: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    padding: 30rpx;
}
</style>