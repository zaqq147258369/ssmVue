<template>
    <swiper class="swiperD">
      <swiper-item v-for="(item,index) in topChangeImages" :key="index" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "src/components/common/swiper";

export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topChangeImages:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .swiperD{
    height: 300px;
    overflow: hidden;
  }
</style>
