<template>
  <div
    class="moviebox"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <div class="loading" v-if="!movies"></div>
    <MovieItem v-else v-for="movie in movies" :key="movie.id" :movie="movie"></MovieItem>
  </div>
</template>
<script>
import MovieItem from "./MovieItem";
import { Toast } from "mint-ui";
export default {
  props: ["type"],
  data() {
    return {
      movies: [],
      loading: false, //默认触发无限滚动
      limit: 6,
      page: 1,
      hasMore: true //判断是否有更多数据 默认是有更多数据
    };
  },
  watch: { 
    type() {
      this.movies = [];
      this.page = 1;
      this.hasMore = true; //每次切换有更多数据
      this.getMovies();
    }
  },
  activated() {
    console.log("moviebox-activated");
     this.loading = false;
  },
  deactivated() {
    this.loading = true;
  },
  methods: {
    loadMore() {
      if (!this.hasMore) {
        //没有更多数据了
        //关闭无限滚动
        Toast({
          message: "我是有底线的.....",
          position: "bottom",
          duration: 3000
        });
        this.loading = true;
        return false;
      }
      this.getMovies();
    },

    getMovies() {
      let { limit, page } = this;
      this.loading = true; //请求数据的时候关闭无限滚动
      let instance = Toast({
        message: "正在加载中.....",
        duration: -1,
        iconClass: "fa fa-cog fa-spin"
      });
      this.$http
        .get("/api/sk/" + this.type, {
          params: {
            limit,
            page
          }
        })
        .then(res => {
          //console.log(res)
          // this.movies = this.movies.concat(res.data.data.object_list);
          this.movies = res.data.data.object_list
          instance.close(); //关闭加载提示框
          this.loading = false;
          if (this.limit * this.page >= res.data.data.total) {
            //判断是否由更多数据
            this.hasMore = false; //没有更多数据
            return false;
          }
          this.page++;
        });
    }
  },
  created() {},
  components: {
    MovieItem
  }
};
</script>
<style lang="scss" scoped>
</style>
