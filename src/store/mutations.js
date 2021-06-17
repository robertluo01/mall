/**
 * Created by Administrator on 2021/6/10.
 */
import {
    ADD_TO_CART,
    ADD_COUNTER
} from "store/mutations-type"


export default {
    //方法一：在mutaitons中直接写方法（添加购物车）
    //方法二：在actions中写逻辑方法，直接调mutations方法改变state值
    // addCart(state,payload){
    //     //循环购物车，判断是否有商品跟传过来商品相同，若是记录下来
    //     //通过for循环查找相同
    //     // let oldProduct = null;
    //     // for(let item of state.cartList){
    //     //     if(item.id == payload.id){
    //     //         oldProduct = item;
    //     //     }
    //     // }
    //
    //     //find函数查找
    //     let oldProduct = state.cartList.find( (item) => {
    //         return item.id = payload.id
    //     })
    //
    //     if(oldProduct){
    //         oldProduct.count +=1
    //     }else{
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     }
    //
    // }


    [ADD_COUNTER](state,payload){
        payload.count++
    },
    [ADD_TO_CART](state,payload){
        payload.checked = true
        state.cartList.push(payload)
    }
}
