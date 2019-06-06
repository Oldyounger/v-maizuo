<template>
    <div class="list">
        <mt-cell
          :title="good.nm"
          :label="'￥'+ good.price" 
          v-for = "good in goods"
          :key="good._id"
        >
            <mt-button @click="addGoodInCar(good)" type="danger" size="small">购买</mt-button>
            <img width="100" height="100" slot="icon" :src="good.img" alt="">
        </mt-cell>
        <Header></Header>
    </div>
</template>

<script>
import Header from "@/components/Header"
import {mapActions} from "vuex"
export default {
    data(){
        return{
            goods:[]
        }
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        getGoods(){
            this.$http.get("/api/sk/mine/shoppingcar").then(res=>{
                // console.log(res.data.data.object_list)
                this.goods = res.data.data.object_list
            })
        }
    },
    created(){
        this.getGoods()
    },
    components:{
        Header,
    }

}
</script>

<style lang="scss">
    .list{
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
    }

</style>





