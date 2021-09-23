<template>
  <view class="money">
    <Top title="会员储值" :isBack="true" />
    <view class="money-box">
      <view class="img-box">
        <image src="/static/img_4.jpg" class="img" />
      </view>
      <view class="tab-box">
         <view class="tab" 
         v-for="(item,index) in messageArr" 
         :key="index" 
         @click="goToChoose(item.id)"
         :class="{active:item.select}"
         >
           <view class="price"  :class="{active:item.select}">{{item.price}}</view>
           <view class="txt"  :class="{active:item.select}">{{item.txt}}</view>
         </view>
      </view>
      <view class="txt-box">
        <view class="title">使用说明</view>
        <view class="content">1.储值余额不可提现、不计利息、不可转赠;</view>
         <view class="content">⒉.储值余额可在奈雪的茶大陆门店、奈雪梦工厂出示会员码，或在「奈雪点单」小程序支付时使用;</view>
          <view class="content">3.特别注意:储值赠券有效期为30天，可在奈雪大陆门店(除机场店外）出示会员码或「奈雪点单」小程序可兑换商品一件，限33元及以下商品，单个订单中购买多件商品抵扣最低价格商品，请在有效期内核销，逾期失效;</view>
           <view class="content">4.开票说明:储值订单支持开票，开具类型为预付卡;使用储值消费的订单储值部分不支持开票。</view>
      </view>
      <view class="btn-box">
        <view class="http">我已阅读并同意<span class="num">《奈雪会员储值协议》</span></view>
        <view class="btn">立即储值</view>
      </view>
    </view>
  </view>
</template>

<script>
import Top from '@/components/top.vue'
export default {
  data(){
    return{
      messageArr:[
        {id:1,price:300,txt:'赠 单品免费卷*1',select:true},
        {id:2,price:100,txt:'赠 单5元现金卷*1',select:false},
        {id:3,price:200,txt:'赠 第二件半价卷*1',select:false},
        {id:4,price:500,txt:'赠 第二件半价卷*3',select:false},
      ]
    }
  },
  methods:{
    goToChoose(id){
      console.log(id)
      this.messageArr.forEach(ele=>{
        if(id == ele.id){
          ele.select = true
        }else{
          ele.select = false
        }
      })
    }
  },
  components: {
    Top,
  },
}
</script>

<style lang="scss" scoped>
.money {
  padding-top: 76rpx;
  .status_bar {
    height: var(--status-bar-height);
    width: 100%;
    margin-top: 40rpx;
  }
  .money-box{
    margin-top: 76rpx;
    .img-box{
      .img{
        height: 350rpx;
        width: 100%;
      }
    }
    .tab-box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      padding: 0 35rpx;
      margin-top: 40rpx;
      .tab{
        width: 310rpx;
        height: 170rpx;
        border: 1px solid #f6f6f6;
        background: #f6f6f6;
        border-radius: 10rpx;
        margin-bottom: 20rpx;
        display: flex;
        flex-direction:column ;
        align-items: center;
        justify-content: center;
        margin-bottom: 40rpx;
        &.active{
          background: #fff;
          border: 1px solid #ebbb4b;
        }
        .price{
          border-bottom: 1px solid #e9e9e9;
          padding-bottom: 10rpx;
          width: 200rpx;
          margin-bottom: 20rpx;
          font-size: 30rpx;
          font-weight: 600;
          color: #000;
          text-align: center;
          &.active{
            color: #ebbb4b;
          }
        }
        .txt{
          color: #ababab;
          font-size: 24rpx;
          &.active{
            color: #ebbb4b;
          }
        }
      }
    }
    .txt-box{
      padding: 0 35rpx;
      margin-bottom: 100rpx;
      .title{
        color: #000;
        font-size: 24rpx;
        margin-bottom: 30rpx;
      }
      .content{
        color: #8f8f8f;
         font-size: 24rpx;
         margin-bottom: 15rpx;
         line-height: 30rpx;
      }
    }
    .btn-box{
      padding: 0 35rpx;
      .http{
        font-size: 24rpx;
         color: #8f8f8f;
        .num{
          color: #a7d500;
          font-size: 24rpx;
          margin-left: 10rpx;
        }
      }
      .btn{
        width: 680rpx;
        height: 80rpx;
        border-radius: 40rpx;
        background: #a7d500;
        color: #000;
        font-size: 24rpx;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 30rpx 0;
        line-height: 80rpx;
      }
    }
  }
}
</style>