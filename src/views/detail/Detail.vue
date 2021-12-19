<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-change-images="topChangeImages"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import {getDetail} from "src/network/detail";
export default {
  name: "Detail",
  components:{
    DetailSwiper,
    DetailNavBar
  },
  data(){
    return{
      iid:null,
      topChangeImages:[]

    }
  },
  activated() {
    console.log(this.$route.params);
    this.iid = this.$route.params.iid;
    this.getDetail();
  },
  methods:{
    getDetail(){
      getDetail(this.id).then(res=>{
        console.log(res);
        const giftList = res.result.promo_model[0].gift_list;
        giftList.forEach((v)=>{
          this.topChangeImages.push(v.exchange_img_url);
        })
        console.log(this.topChangeImages);
      })
    }
  }
}
</script>

<style scoped>

</style>
