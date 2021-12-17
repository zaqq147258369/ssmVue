<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a href="#">
          <img :src="item.image" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "src/components/common/swiper";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad : false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if (!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true;
      }
    }
  }

}
</script>

<style scoped>

</style>
