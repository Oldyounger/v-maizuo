<template>
    <div class="home">
        <!-- Preference -->
        <MovieBox></MovieBox>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import MovieBox from "./MovieBox"
export default {
    components:{
        Tabbar,MovieBox
    }
}
</script>
<style lang="scss" scoped>

</style>
