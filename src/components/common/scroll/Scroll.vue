<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    if (this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        // console.log('下拉加载更多');
        this.$emit('pullingUp');
      })
    }
    setTimeout(()=>{
      this.scroll.refresh();
    },500)
  },
  methods:{
    scrollTo(){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(0,0,500);
    },
    finishPullUp1(){
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>

<style scoped>

</style>
