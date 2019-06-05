<template>
  <div class="cinemadetail">
    <mt-header title="万达国际影城">
      <router-link to="/cinema" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {};
</script>
    
<style lang="scss" scoped>
.mint-header {
    background:#fff;
    font-size:20px;
    color:rgb(65, 63, 63);
    padding-top:15px;
}
</style>
