<template>
  <div class="home">
    <div class="pd60">
      <Banner></Banner>
    </div>
    <div class="navbar" :class="{fixedTop:isFixed}">
      <span
        v-for="nav in navs"
        :key="nav.id"
        :class="{'active':type===nav.type}"
        @click="type=nav.type"
        :type="type"
      >{{nav.title}}</span>
    </div>
    <div class="moviebox" :class="{fixedBox:isFixed}">
      <MovieBox :type="type"></MovieBox>
    </div>
    <BackTop></BackTop>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
import Banner from "@/components/Banner";
import MovieBox from "./MovieBox";
import { stat } from "fs";
import BackTop from "./backTop"
export default {
  name: "home",
  data() {
    return {
      type: "nav",
      isFixed: false,
      homeTop:0,
      navs: [
        { id: 1, title: "正在热映", type: "nav" },
        { id: 2, title: "即将上映", type: "home/list" }
      ]
    };
  },
  beforeRouteLeave(to,from,next){
    this.homeTop =  document.documentElement.scrollTop
    next()
  },
  methods: {
    listenScroll(e) {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (sTop >= 315 && !this.isFixed) {
        this.isFixed = true;
      } else if(sTop < 315 && this.isFixed){
        this.isFixed = false;
      }
    }
  },
  components: {
    Tabbar,
    Banner,
    MovieBox,
    BackTop
  },
  activated() {
    //console.log("home-activated");
    window.addEventListener("scroll", this.listenScroll);
    window.scrollTo(0,this.homeTop)
  },
  deactivated() {
    //console.log("home-deactivated");
    window.removeEventListener("scroll", this.listenScroll);
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
  .fixedBox {
    margin-top: 80px;
    position: relative;
  }
  .navbar {
    position: relative;
    height: 0.5rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    z-index: 11;
    &.fixedTop {
      position: fixed;
      left: 0;
      width: 100%;
      top: 0;
      margin-top: 0;
    }
    span {
      position: relative;
      &:after {
        content: "";
        width: 55px;
        height: 3px;
        position: absolute;
        left: 50%;
        margin-left: -27px;
        bottom: -15px;
        transition: all 1s;
      }
    }
    .active {
      color: rgb(231, 138, 17);
      position: relative;
      &:after {
        content: "";
        background: rgb(231, 138, 17);
      }
    }
  }
}
</style>

