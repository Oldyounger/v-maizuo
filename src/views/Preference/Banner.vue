<template>
    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner._id"    
            >
                <img 
                v-for="url in banner.url[0]"
                :key="url.id"
                width="100%" :src="url" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get("/api/sk/fruits_data").then(res=>{
            // console.log(res)
            this.banners = res.data.data.object_list;
            this.$nextTick(()=>{
                new Swiper(".banner",{
                    loop:true,
                    autoplay:true,
                })
            })
            
        })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-slide{
        overflow: hidden;
        height: 375px;
        border-bottom:1px #ccc solid;

    }
    .data-v-2ae38794{
        position: relative;

    }
</style>

