<template>
  <view class="shop">
    <view class="shop-left">
      <view
        class="item"
        :class="{ active: item.ischeck }"
        v-for="item in listArr"
        :key="item.id"
        @click="clickItem(item)"
        >{{ item.name }}</view
      >
    </view>
    <view class="shop-right">
      <!-- 轮播图 -->
      <view class="banner-swiper">
        <swiper
          class="swiper"
          :indicator-dots="indicatorDots"
          :autoplay="autoplay"
          :interval="interval"
          :duration="duration"
          :circular="true"
          indicator-color="rgba(255, 255, 255, 0.4)"
          indicator-active-color="rgba(255, 255, 255, 1)"
        >
          <swiper-item>
            <view class="swiper-item">
              <image src="/static/logo.png" class="swiper-img" />
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="/static/logo.png" class="swiper-img" />
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image src="/static/logo.png" class="swiper-img" />
            </view>
          </swiper-item>
        </swiper>
      </view>
      <view class="main">
        <view class="box" v-for="item in listArr" :key="item.id">
          <view class="title" :id="'title-' + item.id">{{ item.name }}</view>
          <view
            class="content"
            v-for="(item, index) in 5"
            :key="index"
            @click="goToBuy"
          >
            <Tea />
          </view>
        </view>
      </view>
    </view>
    <ShopPop ref="pop" />
  </view>
</template>

<script>
import ShopPop from './shop-pop.vue'
import Tea from './tea.vue'
export default {
  props: {},
  data() {
    return {
      isShow: false,
      indicatorDots: true,
      autoplay: true,
      duration: 500,
      interval: 2000,
      listArr: [
        { id: 1, name: '当季限定', ischeck: true },
        { id: 2, name: '奈雪必点', ischeck: false },
        { id: 3, name: '中秋月饼', ischeck: false },
        { id: 4, name: '霸气鲜果茶', ischeck: false },
        { id: 5, name: '奈雪软欧包', ischeck: false },
        { id: 6, name: '吐司/寿司', ischeck: false },
        { id: 7, name: '奈雪零食', ischeck: false },
        { id: 8, name: '无糖茶铺', ischeck: false },
        { id: 9, name: '外卖推荐', ischeck: false },
        { id: 10, name: '霸气鲜果茶', ischeck: false },
        { id: 11, name: '奈雪软欧包', ischeck: false },
        { id: 12, name: '吐司/寿司', ischeck: false },
        { id: 13, name: '奈雪零食', ischeck: false },
        { id: 14, name: '奈雪零食', ischeck: false },
        { id: 15, name: '无糖茶铺', ischeck: false },
        { id: 16, name: '外卖推荐', ischeck: false },
        { id: 17, name: '外卖推荐', ischeck: false },
        { id: 18, name: '霸气鲜果茶', ischeck: false },
        { id: 19, name: '奈雪软欧包', ischeck: false },
        { id: 20, name: '吐司/寿司', ischeck: false },
      ],
    }
  },
  components: {
    Tea,
    ShopPop,
  },
  methods: {
    goToBuy() {
      this.$refs.pop.isShow = true
      this.$emit('update:shopCarStatus', false)
    },
    clickItem(val) {
      console.log(val)
      if (val.ischeck) {
        return
      }
      this.listArr.forEach((ele) => {
        if (ele.id == val.id) {
          ele.ischeck = true
        } else {
          ele.ischeck = false
        }
      })

      //uniapp的方法
      // uni
      //   .createSelectorQuery()
      //   .select('#title-' + val.id)
      //   .boundingClientRect((res) => {
      //     console.log('111111', res)
      //     uni.pageScrollTo({ scrollTop: 0, duration: 0 })
      //   })
      //   .exec()

      //微信滚动方法
      var me = this
      var query = wx.createSelectorQuery().in(me)
      query.selectViewport().scrollOffset()
      query.select('#title-' + val.id).boundingClientRect()
      query.exec(function (res) {
        console.log(res)
        var miss = res[0].scrollTop + res[1].top - 220 //滑动距离
        console.log(miss)
        wx.pageScrollTo({
          scrollTop: miss,
          duration: 300,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: row;
  .shop-left {
    width: 170rpx;
    background: #f5f5f5;
    //左边滑动右边不滑动(通过固定定位和浮动实现)
    position: fixed;
    height: 100%;
    overflow: auto;
    float: left;
    z-index: 5;
    //不显示滚动条
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
    .item {
      height: 90rpx;
      width: 170rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22rpx;
      color: #000;
      box-sizing: border-box;
      &.active {
        border-left: 10rpx solid #a7d500;
        background: #fff;
      }
    }
  }
  .shop-right {
    width: 580rpx;
    background: #fff;
    margin-left: 170rpx;
    padding: 0 20rpx;
    height: 270rpx;
    width: 545rpx;
    .banner-swiper {
      height: 270rpx;
      width: 545rpx;
      margin-bottom: 40rpx;
      .swiper {
        height: 270rpx;
        .swiper-item {
          .swiper-img {
            height: 270rpx;
            width: 545rpx;
          }
        }
      }
    }
    .main {
      .title {
        font-size: 22rpx;
        color: #ccc;
        margin-bottom: 50rpx;
      }
    }
  }
}
</style>