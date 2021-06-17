/**
 * Created by Administrator on 2021/6/1.
 */
import axios from 'axios'
export function request(config) {
        //1、创建axios实例
        const instance = axios.create({
            baseURL : 'http://123.207.32.32:8000',
            timeout : 5000
        })

        //2、axios拦截器
        //2.1请求拦截
        instance.interceptors.request.use(config=>{
            //console.log(config);
            //把配置拦截了，一定要返回出去，不然请求失败
            return config
        },error=>{
            return error
        })

        //2.2响应拦截
        instance.interceptors.response.use(res =>{
            //console.log(res)
            return res
        },error=>{
            return error
        })

        //3、真正发送请求
        return instance(config)

}

export function mz_request(config) {
    //1、创建axios实例
    const instance = axios.create({
        baseURL : 'http://www.mzjj.co.kr//index.php?route=rob/',
        timeout : 5000
    })

    //2、axios拦截器
    //2.1请求拦截
    instance.interceptors.request.use(config=>{
        //console.log(config);
        //把配置拦截了，一定要返回出去，不然请求失败
        return config
    },error=>{
        return error
    })

    //2.2响应拦截
    instance.interceptors.response.use(res =>{
        //console.log(res)
        return res
    },error=>{
        return error
    })

    //3、真正发送请求
    return instance(config)

}