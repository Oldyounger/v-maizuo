<template>
  <div class="mine">
    <Head></Head>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";
import Head from "./Head"
export default {
  components: {
    Tabbar,Head
  },
 
};
</script>
<style>
  .mine{
    background:rgba(204, 204, 204, 0.206);
  }
</style>
