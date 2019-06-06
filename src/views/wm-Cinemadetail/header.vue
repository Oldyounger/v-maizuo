<template>
  <div class="cinemadetail">
    <mt-header title="万达国际影城">
      <router-link to="/cinema" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <p class="kid">
      <router-link to="/cinemadetail/kid">儿童票</router-link>
      <router-link tag="i" to="/cinemadetail/kid" class="fa fa-angle-right"></router-link>
    </p>
    <p class="local">
       <i class="fa fa-map-marker"></i>
       <span>山东省青岛市市北区延吉路215号3楼</span>
       <i class="fa fa-phone"></i>
    </p>
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
.kid{
  width: 100%;
  height:20px;
  text-align: center;
  margin:10px 0;
   a{
     color:orange;
     border:1px solid orange;
     padding:1px 2px;
     text-align: center;
     font-size:11px;
   }
   i{
      color:orange;
      margin-left:10px;
   }
}
.local{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:40px;
  margin-bottom:10px;
  i{
    font-size:20px;
  
  }
  span{
    color:rgb(24, 24, 24);
  }
}
</style>
