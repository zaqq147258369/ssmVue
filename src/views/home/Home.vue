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


import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {NavBar},
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
