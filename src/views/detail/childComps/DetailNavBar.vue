<template>
  <div>
    <nav-bar>
      <template v-slot:nav-left >
        <div @click="backClick">
          <img src="@/assets/image/common/back.svg" class="back-img">
        </div>
      </template>
      <template v-slot:nav-center >
        <div class="title">
          <div v-for="(item,index) in titles" :key="index"
               class="title-item"
              :class="{active: index === currentIndex}"
               @click="titleClick(index)">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'src/components/common/navbar/NavBar'

export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
  .title{
    display: flex;
    .title-item{
      flex: 1;
    }
    .active{
      color: var(--color-high-text);
    }
  }
  .back-img{
    //height: 22px;
    //width: 22px;
    //margin-top: 11px;
    vertical-align: middle;
  }
</style>
