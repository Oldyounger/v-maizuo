<template>
  <div class="cinema-header">
    <mt-header title="影院" fixed>
      <router-link to="/city" slot="left">城市<i class="fa fa-angle-down"></i></router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <div class="cinema-nav">
      <div>
        全城
        <i class="fa fa-angle-down"></i>
      </div>
      <div>
        APP订票
        <i class="fa fa-angle-down"></i>
      </div>
      <div>
        最近去过
        <i class="fa fa-angle-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.mint-header {
  background: #fff;
  color: black;
  font-size: 18px;
  width: 100%;
  height: 50px;
  i{
        margin-left:7px;   
        margin-top:2px;
  }
}
.cinema-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 50px;
  color:rgb(85, 85, 85);      
  div {
    width:33%;
    text-align:center;
  }
}
</style>
