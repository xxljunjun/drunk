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
      ></u-tabs>
      <view class="one" v-if="current == 0">
           <Nodata :isgif="false" />
      </view>
      <view class="two" v-if="current == 1"> <Nodata :isgif="false" /></view>
      <view class="threen" v-if="current == 2"> <Nodata :isgif="false" /></view>
    </view>
  </view>
</template>

<script>
import Nodata from "@/components/nodata.vue";
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
  components: {
    Nodata,
  },
  methods: {
    change(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" scoped>
// .u-tab-item {
//   position: relative !important;
//   top: 10rpx !important;
// }
// .u-tab-bar {
//   margin-bottom: 20rpx !important;
// }
// .historySell {
//   /deep/.u-tab-item {
//     position: relative !important;
//     top: 10rpx !important;
//   }
//   /deep/.u-tab-bar {
//     margin-bottom: 20rpx !important;
//   }
// }
// .one,.two,.threen{
//     padding: 0 20rpx;
//     background: #f3f4f8;
// }

</style>