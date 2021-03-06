import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import film from "./film"
import cinema from "./cinema"
import preference from "./preference"
import mine from "./mine"
import login from "./login"
import moviedetail from "./moviedetail"
import moviecar from "./moviecar"
import list from "./list"
import citylist from "./citylist"
import cinemadetail from "./wmcinemadetail"
import moviedetaill from "./moviedetaill"

export default new Router({
  routes: [
    {path:"/",redirect:"/film"},
    film,cinema,mine,preference,
    login,moviecar,moviedetail,list,
    citylist,cinemadetail,moviedetaill,
    {path:"/notfound",component:()=>import("@/views/NotFound")},
    {path:"*",redirect:"/notfound"}
  ]
})
