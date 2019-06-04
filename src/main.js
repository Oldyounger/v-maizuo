import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "./stylesheets/main.scss"
import "./modules/rem.js"
import 'swiper/dist/css/swiper.min.css'
//引入axios
import axios from "axios"
Vue.prototype.$http = axios

//引入自定义指令
import "./modules/directive.js"
//引入mint-ui的相关模块
import { Lazyload, InfiniteScroll, } from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
