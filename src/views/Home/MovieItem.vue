<template>
    <div class="movieItem">
        <div class="img-box">
            <img v-lazy="getImages(movie.cover)" alt="">
        </div>
        <div class="info" >
            <div class="info-left">
                <div class="title">电影：{{movie.title}}</div>
                <div class="count">想看的人：{{movie.cover_y | filterData}}</div>
            </div>
            <div class="info-right">
                
                <div class="rating">电影评分：{{movie.rate}}分</div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default {
    props:
        {movie:Object},
        
    
     methods:{
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    filters:{
        filterData(data){
           if(data > 10000){
               data = (data / 10000).toFixed(2) + "万";
           }
           return data
        }
    }
}
</script>
<style lang="scss" scoped>
    .movieItem{
        display:flex;
        margin:14px;
        background:#fff;
        width:100%;
       height:1.4rem;
        .img-box{
            width:30%;
            height:100%;
            img{
                width:100%;
                height:100%;
            }
        }
        .info{
            display:flex;
            flex-direction: column;
            padding:.1rem .2rem;
            line-height:.30rem;
            .title{
                font-size:18px;
                font-weight: bold;
                color:rgb(247, 79, 28);
                
            }
            .rating{
                padding-top:4px;
                color:orange;
                font-size:13px;
                font-weight: bold;

            }
        }
    }
       
</style>
