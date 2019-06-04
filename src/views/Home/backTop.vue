<template>
    <div class="back-top-box" v-if="isShow" v-backTop> 
        <div class="back-top">
            <i class="fa fa-arrow-up"></i>
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
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop
            if(sTop >= 200 && !this.isShow){
                this.isShow = true
            }else if(sTop < 200 && this.isShow){
                this.isShow = false
            }
        },
        // backtop(){
        //     window.scrollTo(0,0)
        // }
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
    bottom:100px;
    width: 0.4rem;
    height:0.4rem;
    background:rgba(0,0,0,0.7);
    font-size:24px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    opacity: .5;
}
</style>
