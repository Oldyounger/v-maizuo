import {SYNC_UPDATE} from "./const"
export default {
    initCar(store){
        //获取购物车
        let cars = getCar()
        store.commit(SYNC_UPDATE,cars)
    },
    addGoodInCar(store,goodInfo){//添加商品到购物车
        setTimeout(()=>{
            //获取后台返回来的购物车
            let cars = getCar();//[{}]
            let isHas = cars.some(item=>{
                if(item._id === goodInfo._id){
                    item.num++
                    return true;
                }
            })
            if(!isHas){//说明购物车没有此商品
                goodInfo.num = 1
                cars.push(goodInfo)
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //前端的话需要通过mutation
            store.commit(SYNC_UPDATE,cars)
        },1000)
    },
    reduceGoodInCar(store,goodInfo){
        //获取购物车
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item._id === goodInfo._id){
                item.num--
                if(item.num <= 0) 
                    return false;
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        store.commit(SYNC_UPDATE,cars)
    }
}

//依靠 localStorage作为后台模拟 后台数据库 存储cars

function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}