<template>
    <div class="notfound">
        Not Found 404  !!!
        <router-link to="/film">回到首页</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .notfound{
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width:100%;
        height:500px;
        font-size:20px;
        font-weight:900;
        .router-link-active{
            font-weight:900;
        }
    }
</style>
