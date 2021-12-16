<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a href="#">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0;
    border-bottom:10px solid #eee ;
  }
  .recommend-item{
    flex: 1;
    img{
      width: 80px;
      height: 80px;
    }
    div{
      margin-top: 5px;
      font-size: 12px;
    }
  }


</style>
