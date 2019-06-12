<template>
    <div class="notfound">
        Not Found 404  !!!
        <router-link to="/film" tag="div" class="not-foud">回到首页</router-link>
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
        .not-foud{
            width:100px;
            height:40px;
            border:1px solid #ff5f16;
            background:#ff5f16;
            color:#fff;
            font-size:16px;
            font-weight:300;
            text-align: center;
            line-height:40px;
            border-radius: 10px;
            margin-top:50px;
        }
    }
</style>
