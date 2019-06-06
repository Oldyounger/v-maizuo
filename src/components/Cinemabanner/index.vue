<template>
  <div class="home-banner swiper-container">
    <div class="swiper-wrapper" style="width:75px;">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id" style="width:75px;">
        <img width="75" :src="getImages(banner.cover)" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getImages(_url) {
      if (_url !== undefined) {
        let _u = _url.substring(7);
        return "https://images.weserv.nl/?url=" + _u;
      }
    }
  },
  created() {
    //vue.prototype.$http = axios
    this.$http
      .get("/api/sk/nav", {
        params: {
          limit: 6
        }
      })
      .then(res => {
        //console.log(res)
        this.banners = res.data.data.object_list; //必须要等到数据改变 引发新的真实dom渲染完成后才会执行的操作
        this.$nextTick(() => {
          new Swiper(".home-banner", {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,

            loop: true,
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
            }
          });
        });
      });
  }
};
</script>


<style lang="scss" >
.swiper-container {
  width: 100%;
  height: 100%;
  padding:25px 0;
  margin-top:15px;
  background:rgb(226, 219, 208);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  img{
      width:100%;
      height:150px;
  }
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
</style>

