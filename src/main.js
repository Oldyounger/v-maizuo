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
import { Lazyload, InfiniteScroll, Header, Button} from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
//特惠详情页头部  按钮
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);

//引入sweiper.min.css样式文件（特惠详情页里的banner图）
import 'swiper/dist/css/swiper.min.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
