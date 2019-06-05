<template>
    <div class="head">
        <router-link to="/login">
            <div class="bgimg">
            <div class="circle">
                <img width="62" height="62" src="http://img.qqzhi.com/uploads/2018-11-30/021340324.jpg" alt="">
            </div>
            <p class="login">立即登录</p>
        </div>
        </router-link>
        
        <div class="mine-title">
            <div class="left">
                <i class ="fa fa-ticket"></i>
                <p class ="movies-order">电影订单</p>
            </div>
            <div class="right">
                <i class ="fa fa-reorder (alias)"></i>
                <p class ="goods-order">商品订单</p>
            </div>
        </div>

        <div class="bodyBox">
            <router-link to="/login">
                <div 
                    class="bodyBox1"
                    v-for="list in lists"
                    :key="list.id"
                >
                    <div class="bodyBox1-1">
                        <i :class="['fa','fa-'+ list.type ,list.color,'leftfa']" ></i>
                        <p class= "sellCard">{{list.name}}</p>
                    </div>
                    <div class="bodyBox1-2">
                        <p class="money">{{list.rmb}}{{list.money}}</p>
                        <i class= "fa fa-angle-right"></i>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lists:[
                {id:1,type:"credit-card",name:"卖座卡",rmb:"",money:"",color:"red"},
                {id:2,type:"envelope-open-o",name:"组合红包",rmb:"",money:"" ,color:"black"},
                {id:3,type:"shopping-bag",name:"余额",rmb:"￥",money:"0",color:"orange"},
                {id:4,type:"cog",name:"设置",rmb:"",money:"",color:"yellowgreen"},
            ]
        }
    }
}
</script>

<style lang="scss">
    .bgimg{
        width:100%;
        height:1.5rem;
        background:url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png) no-repeat;
        background-size: cover;
        display:flex;
        align-items: center;
        .circle{
            width:62px;
            height:62px;
            border-radius: 50%;
            overflow: hidden;
            margin-left:20px;
        }
        .login{
            color:white;
            margin-left:20px;
            font-size: 16px;
        }
    }
    .mine-title{
        width:100%;
        height: 78px;
        background:#fff;
        display: flex;
        justify-content: space-around;
        .left{
            width:48%;
            height:80px;
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            i{
                color:rgb(255, 225, 0);
                font-size:26px;
                margin-bottom:4px;
            }
        }
        .right{
            width:48%;
            height:80px;
            display:flex;
            justify-content: center;
            align-items: center;  
            flex-direction: column;
            i{
                color:yellowgreen ;
                font-size:26px;
            } 
        }
    }
    .bodyBox{
        height:400px;
        width:100%;
        margin-top:10px;
        .bodyBox1{
            width:100%;
            height:50px;
            background:#fff;
            display: flex;
            justify-content: space-between;
            align-items:center; 
            padding:0 15px;
            margin-bottom:1px;
            .bodyBox1-1{
                display: flex;
                justify-content: space-between;
                align-items:center; 
                .leftfa{
                    margin-right:10px;
                    font-size:18px;
                }
                .sellCard{
                    font-size:14px;
                }
                .red{
                    color:rgba(255, 72, 0, 0.558);
                }
                .black{
                    color:rgba(128, 6, 6, 0.313);
                }
                .orange{
                    color:rgba(255, 166, 0, 0.313);
                }
                .yellowgreen{
                    color:black;
                }  
            }
             .bodyBox1-2{
                width:50px;
                display: flex;
                justify-content: space-between;
                align-items:center;
             }
        }
    }
</style>
