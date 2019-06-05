<template>
  <div class="cinema-header">
    <mt-header title="影院" fixed>
      <router-link to="/citylist" slot="left">
        城市
        <i class="fa fa-angle-down"></i>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
   
    
    
  </div>
</template>

<script>

export default {
 
};
</script>
<style lang="scss" scoped>
.mint-header {
  background: #fff;
  color: black;
  font-size: 18px;
  width: 100%;
  height: 50px;
  i {
    margin-left: 7px;
    margin-top: 2px;
  }
}

</style>
