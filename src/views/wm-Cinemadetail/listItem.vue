<template>
    <div class="listitem">
        <div class="left">
            <p>10:00</p>
            <p>11:52散场</p>
        </div>
        <div class="center">
            <p>国语3D</p>
            <p>1号60帧放映厅</p>
        </div>
        <div class="right">
            <span class="price">￥30</span>
            <router-link to="" class="shopping">购票</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.listitem{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:15px 10px;
    border-top:1px solid rgb(235, 232, 232);
    .price{
        color:rgb(255, 115, 0);
        margin-right:10px;
       
    }
    .shopping{
        color:rgb(236, 110, 26);
        border:1px solid rgb(245, 164, 42);
        padding:3px 5px;
    }
}
</style>
