<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"
         :key="index" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-control{
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
    span{
      padding: 3px;
      border-bottom: 3px solid var(--color-high-text);
    }
  }
</style>
