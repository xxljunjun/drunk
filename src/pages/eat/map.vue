<template>
  <view class="map">
    <Top title="选择门店" :isBack="true" />
     <view style="width: 750rpx" class="tab">
      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        bar-width="140"
        active-color="#a7d500"
      ></u-tabs>
      <view class="one" v-if="current == 0"><ChooseStore /></view>
      <view class="two" v-else><AllwayStore /></view>
    </view>
  </view>
</template>

<script>
import Top from '@/components/top.vue'
import ChooseStore from './components/chooseStore.vue'
import AllwayStore from './components/allwayStore.vue'
export default {
  data(){
    return{
      list: [
        {
          name: "选择门店",
        },
        {
          name: "常用门店",
        },
      ],
       current: 0,
    }
  },
  components: {
    Top,
    AllwayStore,
    ChooseStore
  },
  methods:{
    change(index) {
      this.current = index;
    },
  }
}
</script>

<style lang="scss" scoped>
.map {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .tab {
    margin-top: 70rpx;
    // position: fixed;
    // top: 70rpx;
  }
}
</style>