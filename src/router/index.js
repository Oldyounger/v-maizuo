import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import film from "./film"
import cinema from "./cinema"
import preference from "./preference"
import mine from "./mine"
import citylist from "./citylist"
import cinemadetail from "./wmcinemadetail"
export default new Router({
  routes: [
    {path:"/",redirect:"/film"},
    film,cinema,mine,preference,citylist,cinemadetail,
    {path:"/notfound",component:()=>import("@/views/NotFound")},
    {path:"*",redirect:"/notfound"}
  ]
})
