<template>
    <div class="back-top-box" v-if="isShow" v-backtop>
        <div class="back-top">
            <i class ="fa fa-arrow-circle-o-up"></i>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        backtop(){
            window.scrollTo(0,0)
        },
        listenScroll(){
           let sTop = document.documentElement.scrollTop || document.body.scrollTop; 
           if(sTop>=200 && !this.isShow){
               this.isShow = true
           }else if(sTop<=200 && this.isShow){
               this.isShow = false
           }
        }
    },
    activated(){
        window.addEventListener("scroll",this.listenScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
    }
}
</script>

<style lang="scss" scoped>
    .back-top-box{
        position: fixed;
        right:20px;
        bottom:80px;
        width:0.4rem;
        height: 0.4rem;
        background:rgba(0,0,0,0.3);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
            color:#fff;
            font-size:40px;
        }

    }
</style>


