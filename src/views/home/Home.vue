<template>
  <div>
    <home-nar></home-nar>
    <home-swiper :banners="banners"></home-swiper>
  </div>

</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import {getHomeMultidata} from "../../network/home";
import HomeNar from "./childComps/HomeNar";
export default {
  name: "Home",
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  components: {
    HomeNar,
    HomeSwiper,
  },
  created() {
    this.getHomeMultidata();
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
