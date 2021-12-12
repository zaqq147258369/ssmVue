<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:nav-left>
        <div></div>
      </template>
      <template v-slot:nav-center>
        <div>购物中心</div>
      </template>
      <template v-slot:nav-right>
        <div></div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "src/components/common/navbar/NavBar";

export default {
  name: "HomeNar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
