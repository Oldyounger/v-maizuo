<template>
    <div class="moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <div class="loading" v-if ="!movies"></div>
        <MovieItem
            v-else
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></MovieItem>
    </div>
</template>

<script>
import MovieItem from "./MovieItem"
import {Toast} from "mint-ui";
export default {
    props:["type"],
    watch:{
        type(){
            this.movies=[];//切换的时候数组都是空数组
            this.page=1;//切换的时候偶从第一页开始切换
            this.hasMore = true//每次切换都更多数据
            this.getMovies();//请求更多数据
        }
    },
    data(){
        return {
            movies:[],
            loading:false,//默认触发无限滚动
            limit:6,
            page:1,
            hasMore:true//是否有更多数据，默认有更多数据
        }
    },
    activated(){
        this.loading = false;
    },
    deactivated(){
        this.loading = true;
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                //没有更多数据了
                Toast({
                message:"我是有底线的",
                duration:5000,
                position:"bottom",
                })
                //关闭无限滚动
                this.loading = true
                return false
            }
            this.getMovies()
           
        },
        getMovies(){
            let {page,limit} = this;//let limit = this.limit  let page = this.page
            this.loading = true //先关闭无限滚动
            let instance = Toast({
                message:"正在加载中",
                iconClass: 'fa fa-cog fa-spin',
                duration:-1
            })
            this.$http.get("/api/sk/" + this.type,{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                //this.movies = this.movies.concat(res.data.object_list);
                this.movies = res.data.data.object_list
                this.loading = false//继续开启无限滚动
                instance.close();//关闭加载框
                if(this.limit*this.page >= res.data.data.total){//没有更多数据了
                    this.hasMore = false
                    return false
                }
                this.page++
            })
        }
    },
    components:{
        MovieItem
    }
}
</script>

<style lang="scss" scoped>

</style>

