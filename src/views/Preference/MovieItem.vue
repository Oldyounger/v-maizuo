<template>
    <router-link 
        class="movieitem"
        tag="div"
        :to="{name:'moviedetail',params:{id:movie._id}}"
    >
        <div class="img-box">
            <img width="100%" v-lazy="movie.img" alt="">
        </div>
    </router-link>
</template>
<script>
export default {
    props:{
        movie:Object
    }
}
</script>
<style lang="scss" scoped>

</style>