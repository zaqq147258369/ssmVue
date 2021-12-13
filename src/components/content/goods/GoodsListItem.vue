<template>
  <div class="goods-item">
    <img :src="goodsItem.showImg" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <div class="goods-item-span">
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.collect}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .goods-item{
    width: 47%;
    padding: 5px 0;
    img{
      width: 100%;
      height: 300px;
      border-radius: 5px;
    }
    .goods-item-span{
      display: flex;
      justify-content: space-evenly;
      .price{
        color: var(--color-high-text);
      }
      .collect {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 1px;
          width: 14px;
          height: 14px;
          background: url("~@/assets/image/common/collect.svg") 0 0/14px 14px;
        }
      }
    }
  }

</style>
