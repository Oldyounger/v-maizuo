<template>
  <div class="cinemadetail">
    <Header></Header>
    <div class="bannerbox">
      <Cinemabanner></Cinemabanner>
    </div>
    <router-link to="/moviedetail/246061" tag="div" class="detail-title">
      <div>
        <span class="cinema-title">X战警: 黑凤凰</span>
        <span class="sort">7.9分</span>
      </div>
      <div class="intro">动作 | 科幻 | 冒险 | 114分钟 | 西蒙·金伯格|西蒙..</div>
    </router-link>
    <div class="detail-nav">
      <span @click="changeactive()">今天6月6日</span>
      <span>明天6月7日</span>
      <span>周六6月8日</span>
      <span>周日6月9日</span>
    </div>
    <listBox></listBox>
  </div>
</template>

<script>
import Header from "./header";
import Cinemabanner from "@/components/Cinemabanner";
import Title from "./title";
import listBox from "./listBox";
export default {
  components: {
    Header,
    Cinemabanner,
    Title,
    listBox
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    changeactive() {
      
    }
  }
};
</script>
    
<style lang="scss" scoped>
.detail-title {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  div {
    margin-bottom: 10px;
  }
  .cinema-title {
    font-weight: 500;
    margin-right: 15px;
    font-size: 18px;
  }
  .sort {
    font-size: 14px;
    color: orange;
    font-style: italic;
  }
  .intro {
    font-size: 12px;
  }
}
.detail-nav {
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgb(230, 230, 230);
}
</style>
