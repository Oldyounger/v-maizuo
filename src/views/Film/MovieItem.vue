<template>
     <div class="movieItem">
        <div class="img-box">
            <!-- <img v-lazy="getImage(movie.img)" alt=""> -->
        </div>
        <div class="info" >
            <div class="info-left">
                <div class="title">电影：{{movie.nm}}</div>
                <div class="count">想看的人：{{movie.wish | filtersData}}</div>
            </div>
            <div class="info-right">
                
                <div class="rating">电影评分：{{movie.sc}}分</div>
            </div>
        </div>
    </div>
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

<style lang="scss" scoped>
    .movieitem{
        margin:14px;
        width: 100%;
        height:0.5rem;
        .img-box{
            width:100%;
            height:10px;;
            img{
                width:100%;
                height:100%;
            }
        }
        .info{
            display:flex;
            justify-content: space-between;
            padding:0.1rem 0.2rem;
            .title{
                font-size:18px;
                color:#5f4949;
                font-weight:900;
                padding-bottom: 5px;
            }
            .rating{
                padding-top:10px;
                color:orange;
                font-size:16px;
                font-weight:900;
            }
        }
    }
</style>


