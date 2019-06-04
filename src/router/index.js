import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import film from "./film"
import cinema from "./cinema"
import preference from "./preference"
import mine from "./mine"
export default new Router({
  routes: [
    {path:"/",redirect:"/film"},
    film,cinema,mine,preference,
    {path:"/notfound",component:()=>import("@/views/NotFound")},
    {path:"*",redirect:"/notfound"}
  ]
})
