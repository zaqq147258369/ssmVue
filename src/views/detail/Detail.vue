<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
export default {
  name: "Detail",
  components:{
    DetailNavBar
  },
  data(){
    return{
      iid:null
    }
  },
  activated() {
    console.log(this.$route.params);
    this.iid = this.$route.params.iid;
  }
}
</script>

<style scoped>

</style>
