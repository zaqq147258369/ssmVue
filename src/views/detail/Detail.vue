<template>
  <div id="detail" >
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topChangeImages="topChangeImages" v-if="flag" />
      <detail-base-info :goodInfo="goodInfo" v-if="flag"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imageload="imageLoad"/>
      <detail-param-info />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll";

import {
  getDetail, getParameterImages,
  getShopDetail,
  GoodsInfo,
  Shop
} from "src/network/detail";
export default {
  name: "Detail",
  components:{
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  data(){
    return{
      iid:null,
      topChangeImages:[],
      flag:false,
      goodInfo: {},
      shopInfo:{},
      detailInfo:{}
    }
  },
  created() {
    console.log(this.$route.params);
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.getShopInfo();
    this.getParameterImages();
  },
  methods:{
    getDetail(){
      getDetail(this.id).then(res=>{
        const data = res.result;
        const giftList = res.result.data.images;
        //轮播图
        this.topChangeImages = giftList;
        // 获取商品信息
        this.goodInfo = new GoodsInfo(data.data.productName,data.new_price,data.saleCount,data.service);
        console.log(this.goodInfo);
        //当父组件给子组件传值，使用异步获取数据，首先给子组件传空值，之后刷新数据。
        // 但是这个步骤可能会造成子组件数据错误，子组件过早初始化了
        this.flag = true;
      })
    },
    getShopInfo(){
      getShopDetail(this.iid).then(res=>{
        this.shopInfo = new Shop(res)
        console.log(this.shopInfo);
      })
    },
    getParameterImages(){
      getParameterImages(this.iid).then(res=>{
        console.log(res);
        this.detailInfo = res;
      })
    },
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background: #ffffff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background: #ffffff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
