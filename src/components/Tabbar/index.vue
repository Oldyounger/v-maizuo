<template>
  <div class="tabbar">
    <!-- <TabItem @changeSelected="changeSelected" txt="首页" mark="home" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt>
      <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt>
    </TabItem>
    <TabItem @changeSelected="changeSelected" txt="书影音" mark="audio" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt>
      <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt>
    </TabItem>
    <TabItem @changeSelected="changeSelected" txt="广播" mark="broadcast" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt>
      <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt>
    </TabItem>
    <TabItem @changeSelected="changeSelected" txt="小组" mark="group" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt>
      <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt>
    </TabItem>
    <TabItem @changeSelected="changeSelected" txt="我的" mark="mine" :sel="selected">
      <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt>
      <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt>
    </TabItem>-->

    <TabItem
      v-for="foot in footers"
      :key="foot.id"
      :txt="foot.txt"
      :mark="foot.mark"
      :sel="selected"
    >
    <img slot="normalImg" :src="foot.normalImg" alt>
      <img slot="activeImg" :src="foot.activeImg" alt>
    </TabItem>
  </div>
</template>
<script>
import TabItem from "./TabItem";
export default {
  data() {
    return {
      selected: this.$route.name,
      footers: [
        {id:1,txt:"电影",mark:"film",normalImg:require("../../assets/ic_tab_home_normal.png"),activeImg:require("../../assets/ic_tab_home_active.png")},
        {id:2,txt:"影院",mark:"cinema",normalImg:require("../../assets/ic_tab_audio_normal.png"),activeImg:require("../../assets/ic_tab_audio_active.png")},
        {id:3,txt:"特惠",mark:"preference",normalImg:require("../../assets/ic_tab_broadcast_normal.png"),activeImg:require("../../assets/ic_tab_broadcast_active.png")},
        {id:4,txt:"我的",mark:"mine",normalImg:require("../../assets/ic_tab_mine_normal.png"),activeImg:require("../../assets/ic_tab_mine_active.png")},
      ]
    };
  },
  // methods: {
  //   changeSelected(val) {
  //     this.selected = val;
  //   }
  // },
  components: {
    TabItem
  }
};
</script>
<style lang="scss">
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  border-top: 1px solid #ccc;
  background:#fff;
  
}
</style>
