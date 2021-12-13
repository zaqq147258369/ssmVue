<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
  name: "Scroll",
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType:3,
      pullUpLoad:true,
      click:true
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('下拉加载更多');
    })
  },
}
</script>

<style scoped>

</style>
