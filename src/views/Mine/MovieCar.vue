<template>
    <div class="moviecar">
        <div class="not" v-if="cars.length===0">
            <i class="fa fa-file-movie-o (alias)"></i>
            <p>去挑些喜欢的商品吧</p>
            <router-link to="/list">
                <button class="backhome">观影必备</button>
            </router-link>
        </div>
         <div v-else>
            <mt-cell
                :title="good.nm"
                :label="'￥'+ good.price + '*' + good.num" 
                v-for ="good in cars"
                :key="good._id"
            >
                <mt-button @click="addGoodInCar(good)" type="danger" size="small">+</mt-button>
                <mt-button @click="reduceGoodInCar(good)" type="danger" size="small">-</mt-button>
                <img width="100" height="100" slot="icon" :src="good.img" alt="">
            </mt-cell>
            <div class="movie-footer">
                <div class="movie-left">
                    <p class="movie-Money">总计:{{computeToal.price}}</p>
                    <p class="movie-Num">总数:{{computeToal.num}}</p>
                </div>
                <div class="movie-right">
                    <button class="ft-computed">结算</button>
                </div>
            </div>
        </div>
        <Header></Header>
    </div>
</template>

<script>
import Header from "@/components/Header"
import {mapState,mapActions,mapGetters} from "vuex"
export default {
     computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computeToal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    },
    components:{
        Header
    }
}
</script>

<style lang="scss">
    .not{
        width:200px;
        height:200px;
        margin:200px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i{
            font-size:120px;
            margin-left:5px;
        }
        p{
            margin-top:10px;
        }
        .backhome{
            width:100px;
            height:35px;
            border:none;
            background:#fff;
            border:1px solid #ff5f16;
            border-radius: 5px;
            margin-left:10px;
            margin-top:10px;
            color:#ff5f16;
        }
    }
    .moviecar{
        padding-top:50px;
        .mint-cell-label{
            font-size:16px;
            color:chocolate;
            margin-top:40px;
        }
        .mint-cell-title{
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis;
            .mint-cell-text{
                position:relative;
                top:25px;
            }
        }
        .mint-cell{
            margin-top:10px;
            background:#e6e4e4;
            img{
                float:left;
                margin-right:30px;
            }
        }
        .mint-button--small{
        margin-right:6px;
        }
    }
    .movie-footer{
        position: fixed;
        bottom:0;
        width:100%;
        height:50px;
        background:plum;
        display:flex;
        justify-content: space-between;
        align-items: center;
        .movie-left{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width:49%;
            height:50px
        }
        .movie-right{
            width:49%;
            height:50px;
                display:flex;
                justify-content: center;
                align-items:center; 
            .ft-computed{
                border:none;
                border-radius: 5px;
                background:#ff5f16;
                color:#fff;
                width:100px;
                height:40px;
            }
        }
    }
</style>
