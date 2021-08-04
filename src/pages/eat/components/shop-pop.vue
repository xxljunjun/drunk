<template>
  <view class="shop-pop">
    <u-popup v-model="isShow" mode="center">
      <view class="box">
        <swiper-item>
          <view class="swiper-item">
            <image src="/static/logo.png" class="swiper-img" />
          </view>
        </swiper-item>
        <scroll-view scroll-y="true" style="height: 300rpx">
          <view>
            <view v-for="index in 20" :key="index"> 第{{ index }}个Item </view>
          </view>
        </scroll-view>
        <view class="confrim-btn">
          <u-button>确定</u-button>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isShow: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.shop-pop {
  .box {
    padding: 24rpx;
    text-align: center;
  }
}
</style>