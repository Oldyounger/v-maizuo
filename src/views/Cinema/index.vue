<template>
    <div class="home">
        <Header></Header>
        <ContentItem></ContentItem>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Header from "./header.vue"
import Tabbar from "@/components/Tabbar"
import ContentItem from "./content"
export default {
    components:{
        Tabbar,Header,ContentItem
    }
}
</script>
<style lang="scss" scoped>
    
</style>

