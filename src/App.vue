<template>
  <div id="app">
    <keep-alive include="film"> 
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
<script>
export default {
  components: {
   
  },
  created(){
    this.$router.push("/")
  }
};
</script>
