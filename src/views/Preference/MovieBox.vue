<template>
    <div class="moviebox">
        <div class="loading" v-if="!movies"></div>
        <MovieItem
            v-else
            v-for="movie in movies"
            :key="movie.id"
            :movie = "movie"
        ></MovieItem>
    </div>
</template>
<script>
import MovieItem from "./MovieItem"
export default {
    data(){
        return {
            movies:null
        }
    },
    created(){
        this.$http.get("/api/sk/fruits/list").then(res=>{
            this.movies = res.data.data.object_list
        })
    },
    components:{
        MovieItem
    }
}
</script>
<style lang="scss" scoped>

</style>