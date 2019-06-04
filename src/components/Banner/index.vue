<template>
    <div class="home-banner swiper-container loading">
        <div class="swiper-wrapper">
            <div 
            class="swiper-slide"
            v-for="banner in banners"
            :key="banner.id"
            >
                <img width="100%" :src="getImages(banner.cover)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return{
            banners:[]
        }
    },
    methods:{
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    created(){ //vue.prototype.$http = axios
        this.$http.get("/api/sk/nav",{
            params:{
                limit:6
            }
        }).then(res=>{
            //console.log(res)
           this.banners = res.data.data.object_list;//必须要等到数据改变 引发新的真实dom渲染完成后才会执行的操作
           this.$nextTick(()=>{
               new Swiper(".home-banner",{
               loop:true,
               pagination:{
                   el:".swiper-pagination"
               }
              })
           })
           
        })
    }
}
</script>


<style lang="scss" >
    .swiper-container{
        height:2.4rem;
        padding-top:60px;
        img{
            width:100%;
            height:100%;
        }
        .swiper-pagination{
            left:auto;
            width:auto;
            right:10px;
        }
    }
    .swiper-pagination-bullet-active{
        background:#fff;
        opacity:0.5
    }
</style>

