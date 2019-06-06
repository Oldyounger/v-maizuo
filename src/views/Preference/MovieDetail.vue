<template>
    <div class="moviedetaill">
        <div class = "loading" v-if="movie.length===0"></div>
        <div v-else>
            <mt-header title="">
                <router-link to="/preference" slot="left">
                    <mt-button icon="back">特惠</mt-button>
                </router-link>
            </mt-header>
            <Banner></Banner>
            <div class="img-box">
            </div>
            <div>
                <h1>{{movie.title}}</h1>
                <h3>{{movie.index}}</h3>
                <span class="leftSpan">￥{{movie.price}}</span>
                <span class="rightSpan">{{movie.cover}}人购买</span>
            </div>
            <div>
                <hr>
                <p class="size">规格：{{movie.num}}</p>
                <hr>
            </div>
            <div>
                <span class="leftSpan1">收藏</span>
                <span class="rightSpan1">评论</span>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./Banner"
export default {
    components:{
        Banner  
    },
    data(){
        return {
            movie:[]
        }
    },
    methods:{
        getMovie(){
            this.$http.get("/api/sk/fruits_data/"+this.$route.params.id).then(res=>{
                this.movie = res.data
                // console.log(res.data._id)
            })
        }
    },
    created(){
        this.getMovie()
    }
}
</script>

<style lang="scss" scoped>
    .img-box{
        display:flex;
        float: left;
    }
    .mint-header{
        background:#fff;
        color:#ff5f16;
        margin-bottom:10px;
    }
    h1{
        font-size: 20px;
        line-height: 40px;
        height: 40px;
        margin-left: 10px;
    }
    h3{
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        margin-left: 20px;
    }
    .leftSpan{
        font-size: 26px;
        color:red;
        line-height: 50px;
        height: 50px;
        margin-left: 14px;
    }
    .rightSpan{
        font-size: 10px;
        margin-left: 220px;
    }
    .size{
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        margin-left: 20px;
    }
    .leftSpan1{
        display:block;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 2rem;
        height: 68px;
        background: #ccc;
        color:#ff5f16;
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
    .rightSpan1{
        display:block;
        position: fixed;
        display:flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        width: 2rem;
        height: 68px;
        background: #999;
        color:#ff5f16;
        font-size: 18px;

    }
</style>
