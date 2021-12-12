<template>
  <div id="home">
    <home-nar></home-nar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li><li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>

</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeNar from "./childComps/HomeNar";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import TabControl from "src/components/content/tabControl/TabControl";

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
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      }
    }
  },
  components: {
    HomeNar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl
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
      getHomeGoods(type,page).then(res=>{
        console.log(res);
        this.goods[type].list.push(res.list);
        this.goods[type].page++ ;
      })
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
  }
</style>
