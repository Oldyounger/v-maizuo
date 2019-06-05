<template>
    <div class="home">
        <div>
            <Banner></Banner>
        </div>
        <div class="navbar" :class="{fixedTop:isFixed}">
            <span
            v-for="nav in navs"
            :key="nav.id"
            :class="{'active':type === nav.type}"
            @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <div class="moviebox" :class="{fixedBox:isFixed}">
            <MovieBox :type="type"></MovieBox>
        </div>
        <Tabbar></Tabbar>
        <Backtop></Backtop>
        
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
import { stat } from "fs";
import Backtop from "./Backtop"

export default {
    name:"home",
    data(){
        return{
            type:"home/list",
            isFixed:false,
            homeTop:0,
            navs:[
                {id:1,title:"正在热映",type:"home/list"},
                {id:2,title:"即将上映",type:"home/cominglist"}
            ]
        }
    },
    beforeRouteLeave(to,from,next){//路由离开的时候
        this.homeTop = document.documentElement.scrollTop || document.body.scrollTop;
        next();
    },
    methods:{
        listenScroll(e){
             //获取滚动高度
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop>=300 && !this.isFixed){
                this.isFixed=true;
            }else if(sTop<=300 && this.isFixed){
                this.isFixed=false;
            }
        }
    },
    created(){
        //window.addEventListener("scroll",this.listenScroll)
    },
    beforeDestroy(){
        //window.removeEventListener("scroll",this.listenScroll)
    },
    activated(){
        window.addEventListener("scroll",this.listenScroll);
        //document.documentElement.scrollTop = this.homeTop;
        window.scrollTo(0,this.homeTop)
        //scrollTo
    },
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
        this.isFixed=false;
    },
    components:{
        Tabbar,Banner,MovieBox,Backtop
    }

}
</script>

<style lang="scss" scoped>
    .home{
        padding-bottom:70px;
        .fixedBox{
            margin-top:130px;
        }
        .navbar{
            position: relative;
            height:50px;
            background:#fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top:10px;
            z-index:10;
            &.fixedTop{
                position:fixed;
                top:0;
                left:0;
                width:100%;
                margin-top: 0;
            }
            span{
                position:relative;
                &:after{
                    content:"";
                    width:40px;
                    height:3px;
                    background:transparent;
                    position: absolute;
                    left:50%;
                    margin-left:-20px;
                    bottom:-10px;
                    transition: all 1s;
                }
            }
            .active{
                color:#ff5f16;
                transition: all 1s;
                position: relative;
                &:after{
                    content:"";
                    background:#ff5f16;
                    transition: all 1s;
                }
            }
        }
    }
</style>


