<template>
  <view class="home">
    <view class="banner-swiper"> </view>
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
.home {
  color: #000;
  .banner-swiper {
    height: 640rpx;
    width: 750rpx;
    background: red;
  }
}
</style>
