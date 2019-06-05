<template>
  <div class="cinema">
    <Header></Header>
    <div class="cinema-nav">
      <div
        v-for="nav in navs"
        :key="nav.id"
        :class="{'active':type===nav.type}"
        @click="type=nav.type"
      >
        {{nav.title}}
        <i class="fa fa-angle-down"></i>
      </div>
    </div>
    <Content></Content>
    <Tabbar ></Tabbar>
  </div>
</template>
<script>
import Header from "./header.vue";
import Tabbar from "@/components/Tabbar";
import Content from "./content";
import Tabapp from "./tabapp";
import Tabcity from "./tabcity";
import Tabrecently from "./tabrecently";
export default {
  components: {
    Tabbar,
    Header,
    Content,
    Tabapp,
    Tabcity,
    Tabrecently
  },
  data() {
    return {
      type: "",
      currentTab: "",
      isShow:false,
      navs: [
        { id: 1, title: "城市", type: "city", name: "city" },
        { id: 2, title: "APP订票", type: "App", name: "app" },
        { id: 3, title: "最近去过", type: "recently", name: "recently" }
      ]
    };
  },
  methods: {
    showTab: function(tab) {
      this.currentTab = tab; // tab 为当前触发标签页的组件名
    }
  }
};
</script>
<style lang="scss" scoped>
.cinema-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 0;
  width: 100%;
  height: 50px;
  color: rgb(85, 85, 85);
  background: #fff;
  div {
    width: 33%;
    text-align: center;
  }
  .active {
    color: rgb(231, 138, 17);
    position: relative;
  }
  
 .nav-table{
    position: fixed;
    width:100%;
    background:#fff;
    left: 0;
    top: 100px;
    background: pink;
    ul{
      display: flex;
    }
 }
}
</style>

