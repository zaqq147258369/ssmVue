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
  },
}
</script>

<style scoped lang="scss">
  .wrapper{
    /*height:200px;*/
    background: red;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 49px;
    li{
      height: 200px;
    }
  }
</style>
