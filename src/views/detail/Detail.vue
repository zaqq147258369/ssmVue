<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topChangeImages="topChangeImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import {
  getDetail
} from "src/network/detail";
export default {
  name: "Detail",
  components:{
    DetailSwiper,
    DetailNavBar
  },
  data(){
    return{
      iid:null,
      topChangeImages:[],
    }
  },
  activated() {
    console.log(this.$route.params);
    this.iid = this.$route.params.iid;
    this.getDetail();
  },
  methods:{
    getDetail(){
      const giftList = [
        'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg'];
      const aaa= [];
      for (let i = 0;i<3;i++){
        aaa.push(giftList[i]);
      }
      this.topChangeImages = aaa;
      getDetail(this.id).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
