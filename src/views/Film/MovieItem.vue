<template>
     <router-link 
        tag="div"
        class="movieItem"
        :to="{name:'moviedetail',params:{id:movie.id}}">
        <div class="img-box">
            <img v-lazy="getImage(movie.img)" alt="">
        </div>
        <div class="info" >
            <div class="info-left">
                <div class="title">电影：{{movie.nm}}</div>
                <div class="count">想看的人：{{movie.wish | filtersData}}</div>
            </div>
            <div class="info-right">
                <div class="rating">电影评分：{{movie.sc}}分</div>
                <router-link 
                class="button"
                to="/cinema"
                >购票</router-link>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        movie:Object
        },
    methods:{
       getImage(url){
            // 把现在的图片连接传进来，返回一个不受限制的路径
            if(url !== undefined){
                return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
            }
        }
    },
    filters:{
        filtersData(data){
            if(data>10000){
                data = (data/10000);
                data = data.toFixed(1);
                data += "w"
            }
            return data;
        }
    }

}
</script>

<style lang="scss"  >
    .movieItem{
        margin:14px;
        display: flex;
        justify-content: space-between;
        .img-box{
            width:30%;
            height:100%;
            img{
                width:100%;
                height:100%;
            }
        }
        .info{
            // display:flex;
            // justify-content: space-between;
            width: 70%;
            height: 100%;
            padding:0.1rem 0.1rem;
            position: relative;
            .title{
                font-size:18px;
                color:#5f4949;
                font-weight:900;
                padding-bottom: 5px;
                width:80%;
            }
            .rating{
                padding-top:10px;
                color:orange;
                font-size:16px;
                font-weight:900;
            }
            .button{
                width:60px;
                height: 30px;
                border:1px solid orange;
                color:orange;
                text-align: center;
                line-height: 30px;
                position: absolute;
                bottom:27px;
                right:0px;
            }
        }
    }
</style>


