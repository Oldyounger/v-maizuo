<template>
  <div
    class="cinema-content"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
    <div class="loading" v-if="!items"></div>
    <ContentItem v-else v-for="item in items" :key="item._id" :item="item"></ContentItem>
  </div>
</template>

<script>
import ContentItem from "./contentItem.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      loading: false, //默认触发无限滚动
      items: [],
      limit: 10,
      page: 1,
      hasMore: true //默认有更多数据
    };
  },
  components: {
    ContentItem
  },
  methods: {
    loadMore() {
      //  console.log("loadmore")
      if (!this.hasMore) {
        Toast({
          message: "我也是有底线的",
          duration: 2000,
          position: "bottom"
        });
        this.loading = true; //没有更多的数据关闭无线滚动
        return false;
      }
      this.getItems();
    },
    getItems() {
      let { page, limit } = this;
      this.loading = true;
      let instance = Toast({
        message: "正在加载中。。。。",
        duration: -1,
        iconClass: "fa fa-cog fa-spin"
      });
      this.$http
        .get("/api/sk/movie/cinemas", {
          params: {
            limit,
            page
          }
        })
        .then(res => {
          this.items = this.items.concat(res.data.data.object_list);
          this.loading = false;
          instance.close();
          if (this.limit * this.page >= res.data.data.total) {
            //判断是否由更多数据
            this.hasMore = false; //没有更多数据
            //console.log(this.hasMore)
            return false;
          }
          this.page++;
        });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.cinema-content {
  width: 100%;
  position: fixed;
  top: 100px;
  left: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 50px;
}
</style>
