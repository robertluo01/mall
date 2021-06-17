/**
 * Created by Administrator on 2021/6/10.
 */

import BackTop from  "components/content/backTop/backTop"



export const backTopMixin = {
    methods : {
        topClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        listenShowBackTop(position){

            //console.log(position.y)
            this.isShowBackTop = position.y < -800
        }
    },
    data(){
        return {
            isShowBackTop : false,
        }
    },
    components : {
        BackTop
    }

}
