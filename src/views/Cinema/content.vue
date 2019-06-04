<template>
  <div
    class="cinema-content"
    v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
  >
   <div class="loading" v-if="!items"></div>
    <ContentItem v-else v-for="item in items" :key="item.id" :item="item"></ContentItem>
  </div>
</template>

<script>
import ContentItem from "./contentItem.vue";

export default {
  data() {
    return {
        loading:false,//默认触发无限滚动
        items:[],
        limit:6,
        page:1
    };
  },
  components: {
    ContentItem
  },
  methods: {
    loadMore() {
      //  console.log("loadmore")
      this.getItems()
    },
    getItems(){
        let {page, limit}= this;
        this.$http.get("/api/sk/nav",{
            params:{
                limit,
                page
            }
        }).then(res=>{
            this.items = res.data.data.object_list;
            this.page++
        })
    }
  },
  created(){
    
  }
};
</script>
<style lang="scss" scoped>
.cinema-content {
  width: 100%;
  position: fixed;
  top: 100px;
  left: 0;
  overflow:hidden;
}
</style>
