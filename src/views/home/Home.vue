<template>
  <div id="home">
    <home-nar></home-nar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <goodslist :goods="showGoods"></goodslist>
  </div>

</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeNar from "./childComps/HomeNar";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import TabControl from "src/components/content/tabControl/TabControl";
import Goodslist from "components/content/goods/Goodslist";

import {
  getHomeMultidata,
  getHomeGoods
} from "../../network/home";
export default {
  name: "Home",
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      },
      currentType:'pop',
    }
  },
  components: {
    HomeNar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    Goodslist
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidataFun();
    this.getHomeGoodsFun('pop');
    this.getHomeGoodsFun('new');
    this.getHomeGoodsFun('sell');
  },
  methods:{
    getHomeMultidataFun(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoodsFun(type){
      const page = this.goods[type].page+1;
      //假数据
      this.setGoodsByJson(type);
      // 真实数据
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        if (res.list !== undefined){
          this.goods[type].list.push(res.list);
          this.goods[type].page++ ;
        }
      })
    },
    setGoodsByJson(type){
      const clientUrl = {
        showImg:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
        title:'假数据展示',
        price:'1.00',
        collect:'20'
      }
      const clientUrl2 = {
        showImg:'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
        title:'假数据展示',
        price:'1.00',
        collect:'20'
      }
      const clientUrl3 = {
        showImg:'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg',
        title:'假数据展示',
        price:'1.00',
        collect:'20'
      }
      let i = 30;
      while (i > 0){
        switch (type) {
          case 'pop':
            this.goods[type].list.push(clientUrl);
            break;
          case 'new':
            this.goods[type].list.push(clientUrl2);
            break;
          case 'sell':
            this.goods[type].list.push(clientUrl3);
            break;
        }
        i--;
      }
      this.goods[type].page = 1 ;
      console.log(this.goods);
    },
    /*
    * 事件监听
    * */
    tabClick(index){
       switch (index){
         case 0:
           this.currentType = 'pop';
           break;
         case 1:
           this.currentType = 'new';
           break;
         case 2:
           this.currentType = 'sell';
           break;
       }
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
