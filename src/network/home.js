/**
 * Created by Administrator on 2021/6/2.
 */
import {request,mz_request} from './request';

export function getHomeMultiData() {

    return request({
        url : '/home/multidata'
    })

}


export function getHomeGoods(type,page) {
    return mz_request({
        url: "/vueapi/getproduct",
        params : {
            type,
            page
        }
    })
}
