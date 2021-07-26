<template>
  <view class="home">
    {{ token }}
    <button @click="getWheather">迪阿敏我</button>
    <TabBar />
  </view>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
import { getWeather } from '@/serve/api/index.js'
export default {
  data() {
    return {
      token: '',
    }
  },
  mounted() {},
  onLoad() {
    this.token = this.$store.state.token
    console.log('00000000', this.$store.state.token)
  },
  methods: {
    getWheather() {
      let params = {
        city: '深圳',
        appkey: '7a85fc9df58cd155f764e033a257d879',
      }
      getWeather(params).then((res) => {
        console.log('获取天气', res)
      })
    },
  },
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
