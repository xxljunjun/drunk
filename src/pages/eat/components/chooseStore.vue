<template>
  <view class="choosemap">
    <view class="box">
      <view class="box-1">
        <view class="txt">深圳市></view>
        <view class="search">搜索</view>
      </view>
      <view class="box-2">
        <view class="page-body">
          <view class="page-section page-section-gap">
            <map
              :style="'width: 100%;' + ' height:' + large + 'rpx'"
              :latitude="latitude"
              :longitude="longitude"
              :markers="covers"
            >
            </map>
          </view>
        </view>
      </view>
      <view class="box-3" @click="closeMap">{{ txt }}</view>
    </view>
    <view class="map" v-for="(index,item) in 6" :key='index'>
     <BoxLocation :item='item'/>
    </view>
  </view>
</template>

<script>
import BoxLocation from './box-location.vue'
export default {
  data() {
    return {
      txt: "收起地图",
      large: 400,
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          latitude: 39.909,
          longitude: 116.39742,
          //   iconPath: "../../../static/location.png",
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          //   iconPath: "../../../static/location.png",
        },
      ],
    };
  },
  components:{
    BoxLocation
  },
  methods: {
    closeMap() {
      if (this.large == 400) {
        this.large = 0;
        this.txt = "展开地图";
      } else {
        this.large = 400;
        this.txt = "收起地图";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.choosemap {
  .box {
    .box-1 {
      height: 110rpx;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding: 0 30rpx;
      align-items: center;
    }
    .box-2 {
      //   height: 400rpx;
      width: 750rpx;
      //   background: red;
      .page-body {
        // height: 400rpx;
        width: 750rpx;
      }
    }
    .box-3 {
      border-top: 1rpx solid #ccc;
      height: 60rpx;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .map {
    padding: 20rpx;
    background: #f0f4f3;
    margin-bottom: 20rpx;
  }
}
</style>