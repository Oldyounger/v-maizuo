<template>
  <div class="tabItem" @click="change">
    <span v-if="!flag">
      <slot name="normalImg"></slot>
    </span>
    <span v-else>
      <slot name="activeImg"></slot>
    </span>
    <span :class="{active:flag}">{{txt}}</span>
  </div>
</template>
<script>
export default {
  props: ["txt", "mark", "sel", "changeSelected"],
  computed: {
    flag() {
      if (this.mark === this.sel) {
        return true;
      }
      return false;
    }
  },
  methods: {
    change() {
        // console.log(this)
      //让父组件去更改自身的数据sel
      //this.changeSelected(this.mark);
      //this.$emit("changeSelected",this.mark)
      this.$router.push("/" + this.mark)
    }
  }
};
</script>
<style lang="scss" scoped>
.tabItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  .active{
    color:#ec790e;
  }
}
</style>
