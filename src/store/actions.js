/**
 * Created by Administrator on 2021/6/10.
 */
import {
    ADD_TO_CART,
    ADD_COUNTER
} from "store/mutations-type"


export default {
    //添加购物车第二种方法
    addCart(context,payload){

       return new Promise((resolve)=>{

            let oldProduct = context.state.cartList.find(function (item) {
                return item.id == payload.id
            })

            if(oldProduct){
                //oldProduct.count +=1
                context.commit(ADD_COUNTER,oldProduct)
                resolve('当前商品数量+1')
            }else{
                payload.count = 1
                //state.cartList.push(payload)
                context.commit(ADD_TO_CART,payload)
                resolve('添加了新的商品')

            }

        })



    }
}
