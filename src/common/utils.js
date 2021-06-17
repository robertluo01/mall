/**
 * Created by Administrator on 2021/6/1.
 */
 //封装防抖动函数
export function debounce(func,delay){
    let timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}