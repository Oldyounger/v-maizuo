<template>
  <div class="listbox">
    <ListItem v-for="i in 20" :key="i"></ListItem>
  </div>
</template>

<script>
import ListItem from "./listItem"
export default {
  components:{
    ListItem,
  }
}
</script>

<style>

</style>
