<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.image_url" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.product_name}}</p>
      <div class="goods-item-span">
        <span class="price">{{goodsItem.sale_price}}</span>
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
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsItem.pid)
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
