<template>
  <div id="home">
    <home-nar></home-nar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl2"
                 class="tab-control-nav"
                 v-show="isTabFixed"/>

    <scroll class="content" ref="scroll"
            :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore" >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends" />
      <home-feature-view />
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
import HomeNar from "./childComps/HomeNar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import TabControl from "src/components/content/tabControl/TabControl";
import GoodsList from "src/components/content/goods/GoodsList";
import Scroll from "src/components/common/scroll/Scroll";
import BackTop from "src/components/content/backTop/BackTop";

import {
  getHomeMultidata,
  getHomeGoods2
} from "src/network/home";
import {debounce} from "src/common/utils";
export default {
  name: "Home",
  components: {
    HomeNar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
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
      isShowBackTop:false,
      taboffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  destroyed() {

  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    this.getHomeMultidataFun();
    this.getHomeGoodsFun('pop');
    this.getHomeGoodsFun('new');
    this.getHomeGoodsFun('sell');
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',()=>{
      refresh();
    })
  },
  methods:{
    /*
    * 事件监听相关的方法
    * */
    getHomeMultidataFun(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoodsFun(type){
      const page = this.goods[type].page+1;
      // 真实数据
      getHomeGoods2(type,page).then(res=>{
        console.log(res.data);
        if (res.data !== undefined){
          this.goods[type].list = res.data;
          this.goods[type].page++ ;
          this.$refs.scroll.finishPullUp1();
        }
        console.log(this.goods);
      })
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
       this.$refs.tabControl2.currentIndex = index;
       this.$refs.tabControl.currentIndex = index
    },
    backClick(){
      this.$refs.scroll.scrollTo();
      // console.log('点击');
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000;
      this.isTabFixed = (-position.y) > this.taboffsetTop;
      console.log(this.isTabFixed);
    },
    loadMore(){
      this.getHomeGoodsFun(this.currentType);
    },
    swiperImageLoad(){
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.taboffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .content{
    /*height: 200px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .bottom-scr{
    height: 570px;
  }
  .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .tab-control-nav{
    position: relative;
    z-index: 9;
  }
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  margin-top: 44px;*/
  /*  overflow: hidden;*/
  /*}*/
</style>
