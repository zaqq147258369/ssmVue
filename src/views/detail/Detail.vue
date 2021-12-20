<template>
  <div id="detail" style="margin-bottom: 50px">
    <detail-nav-bar />
    <detail-swiper :topChangeImages="topChangeImages" v-if="flag" />
    <detail-base-info :goodInfo="goodInfo" v-if="flag"/>
    <detail-shop-info :shop="shopInfo"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import {
  getDetail,
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
    DetailShopInfo
  },
  data(){
    return{
      iid:null,
      topChangeImages:[],
      flag:false,
      goodInfo: {},
      shopInfo:{}
    }
  },
  created() {
    console.log(this.$route.params);
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.getShopInfo();
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
    }
  }
}
</script>

<style scoped>

</style>
