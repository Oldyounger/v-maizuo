<template>
    <div class="moviedetail">
        <div v-if="!movie"></div>
        <div v-else>
            <div class="img-box">
                <img :src="getImages(movie.img)" alt="">
            </div>
            <p class="title">{{movie.nm}}
                <span>{{movie.version}}</span>
            </p>
            <p class="actor">主演：{{movie.star}}</p> 
            <p class="time">上映时间：{{movie.rt}}</p>
            <p class="score">评分：{{movie.sc}}分</p>
            <div class="main"><img :src="getImages(movie.url)" alt=""></div>
            <p class="oneactor">{{movie.work}}</p>
            <p class="name">{{movie.name}}</p>
        </div>
    </div>
</template>
<script>
import getImages from "@/modules/getImages"
export default {
    data(){
        return {
            movie:null
        }
    },
    methods:{
        getImages,
        getMovie(){
            this.$http.get("/api/sk/home/details/"+this.$route.params.id).then(res=>{
                // console.log(res.data)
                this.movie = res.data
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
        width:100%;
        height: 300px;
        img{
            width:100%;
            height: 100%;
        }
    }
    .title{
        font-size: 25px;
        font-weight: 900;
        margin:20px 0 0 20px;
    }
    span{
        width: 30px;
        height: 20px;
        background: #ccc;
        color: white;
        font-size: 12px;
    }
    .actor{
        font-size: 15px;
        margin:20px 0 0 20px;

    }
    .time{
        font-size: 15px;
        margin:20px 0 0 20px;
    }
    .score{
        font-size: 16px;
        color: orangered;
        margin:20px 0 0 20px;
    }
    .main{
        width: 100%;
        height:250px;
        margin-top: 10px;
        img{
            width: 60%;
            height: 100%;
            margin-left: 80px;
        }
    }
    .oneactor{
        font-size: 15px;
        text-align: center;
        margin:10px 0 0 0
    }
    .name{
        font-size: 15px;
        text-align: center;
        margin:10px 0 0 0
    }
</style>


