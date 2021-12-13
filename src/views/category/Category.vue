<template>
  <div class="wrapper">
    <ul class="content">
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
      <li>测试滚动</li>
    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)
export default {
  name: "Category",
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll('.wrapper',{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('scroll',()=>{
      // console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('下拉加载更多');
    })
  },
}
</script>

<style scoped>
  .wrapper{
    height:200px;
    background: red;
    overflow: hidden;
  }
</style>
