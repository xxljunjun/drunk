<template>
  <view class="price">
    <Top title="我的卡卷" :isBack="true" />
    <view class="bottom">
      <view class="left">优惠券兑换</view>
      <view class="right">历史卡卷</view>
    </view>
    <view style="width: 750rpx" class="tab">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-width="60"
        active-color="#a7d500"
        bg-color="#f3f4f8"
      ></u-tabs>
      <view class="one" v-if="current == 0">
           <Nodata :isgif="false" type='1'/>
      </view>
      <view class="two" v-if="current == 1"> <Nodata :isgif="false"  type='1'/></view>
      <view class="threen" v-if="current == 2"> <Nodata :isgif="false"  type='1'/></view>
      <view class="four" v-if="current == 3"> <Nodata :isgif="false"  type='1'/></view>
    </view>
  </view>
</template>

<script>
import Top from "@/components/top.vue";
import Nodata from "@/components/nodata.vue";
export default {
  data(){
    return{
      list: [
        {
          name: "全部",
        },
        {
          name: "茶饮卷",
        },
        {
          name: "酒屋卷",
        },
        {
          name: "零售卷",
        },
      ],
      current: 0,
    }
  },
  components: {
    Top,
    Nodata
  },
  methods: {
    change(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .tab{
    margin-top: 76rpx;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90rpx;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35rpx 0;
    box-sizing: border-box;
    .left {
      border-right: 1px solid #c2c2c2;
      align-items: center;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: 24rpx;
      color: #000;
    }
    .right {
      display: flex;
      align-items: center;
      flex: 1;
      text-align: center;
      justify-content: center;
      font-size: 24rpx;
      color: #000;
    }
  }
}
</style>