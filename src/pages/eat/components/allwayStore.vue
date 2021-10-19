<template>
  <view>
      <view class="map" v-for="(index, item) in 6" :key="index">
          <BoxLocation :item="item" />
        </view>
  </view>
</template>

<script>
import BoxLocation from "./box-location.vue";
export default {
  components: {
    BoxLocation,
  },
};
</script>

<style lang="scss" scoped>
.map{
    padding: 20rpx;
    margin-bottom: 20rpx;
    padding-top: 20rpx;
}
</style>