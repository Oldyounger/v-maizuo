// v-backTop 就可以实现返回顶部的功能
import Vue from "vue"
Vue.directive("backtop", {
    bind(el,binding,vnode) {
        //console.log(el,binding,vnode)
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})