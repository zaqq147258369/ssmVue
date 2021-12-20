<template>
  <div v-if="Object.keys(goodInfo).length !== 0" class="base-info">
    <div>{{goodInfo.title}}</div>
    <div>
      <span>{{goodInfo.newPrice}}</span>
      <span>{{goodInfo.oldPrice}}</span>
      <span v-if="goodInfo.discount" class="discount">{{goodInfo.discount}}</span>
    </div>
    <div>
      <span>{{goodInfo.colums[0]}}</span>
      <span>{{goodInfo.colums[1]}}</span>
<!--      <span>{{goodInfo.services[goodInfo.services.length -1].name}}</span>-->
    </div>
    <div class="info-service">
      <span class="info-service-item">
        <span>{{goodInfo.services.serviceDialogShow}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goodInfo:{
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
