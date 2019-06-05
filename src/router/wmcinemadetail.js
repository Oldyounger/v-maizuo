export default{
    name:"cinemdetail",
    path:"/cinemadetail",
    component:()=>import("@/views/wm-Cinemadetail"),
    children:[
        {path:"kid",component:()=>("@/views/wm-Cinemadetail/kid"),name:"kid"}
    ]
}