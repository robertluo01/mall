/**
 * Created by Administrator on 2021/6/8.
 */
import {mz_request} from "./request";

export function getProductInfo(id){
    return mz_request({
        url : '/product',
        params : {
            product_id:id
        }
    })

}

export class Goods{
    constructor(data){
        this.num_price = parseInt(data.price.substr(1)),
        this.price = data.price,
            this.logoimg = data.logoimg,
            this.title = data.heading_title,
            this.reviews = data.reviews,
            this.topImage = data.images

    }
}
