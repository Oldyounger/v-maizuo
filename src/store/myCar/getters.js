export default{
    computeToal(state){
        let cars = state.cars;
        let total = {price:0,num:0}
        cars.forEach(item=>{
            total.price += item.price * item.num;
            total.num +=item.num;
        })
        total.price = total.price.toFixed(2);//保留两位小数
        return total
    }
}