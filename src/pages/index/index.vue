<template>
  <view class="home">
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
}
</style>
