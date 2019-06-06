<template>
    <div class="header">
        <div class="header-top">
            <router-link to="/mine">
                <i class ="fa fa-angle-left"></i>
            </router-link>
            <span>订单</span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .header-top{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:50px;
        background:#fff;
        display:flex;
        justify-content: space-around;
        align-items: center;
        i{
            font-size:30px;
            margin-left:-40px;
        }
        span{
            font-size: 18px;
        }
    }
</style>
