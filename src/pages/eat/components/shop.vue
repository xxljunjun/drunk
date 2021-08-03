<template>
  <view class="shop">
    <view class="shop-left">
      <view
        class="item"
        :class="{ active: item.ischeck }"
        v-for="(item, index) in listArr"
        :key="index"
        @click="clickItem(item)"
        >{{ item.name }}</view
      >
    </view>
    <view class="shop-right">22222222</view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
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
        { id: 11, name: '霸气鲜果茶', ischeck: false },
        { id: 12, name: '奈雪软欧包', ischeck: false },
        { id: 13, name: '吐司/寿司', ischeck: false },
        { id: 14, name: '奈雪零食', ischeck: false },
        { id: 15, name: '无糖茶铺', ischeck: false },
        { id: 16, name: '外卖推荐', ischeck: false },
        { id: 17, name: '外卖推荐', ischeck: false },
        { id: 18, name: '霸气鲜果茶', ischeck: false },
        { id: 19, name: '奈雪软欧包', ischeck: false },
        { id: 20, name: '吐司/寿司', ischeck: false },
        { id: 21, name: '奈雪零食', ischeck: false },
        { id: 22, name: '无糖茶铺', ischeck: false },
        { id: 23, name: '外卖推荐', ischeck: false },
      ],
    }
  },
  components: {},
  methods: {
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
  }
}
</style>