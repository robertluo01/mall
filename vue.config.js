/**
 * Created by Administrator on 2021/6/2.
 */

const pxtovw = require('postcss-px-to-viewport');

module.exports = {
    configureWebpack:{
        resolve : {
            alias :  {
                'assets' : '@/assets',
                'common' : '@/common',
                'components' : '@/components',
                'network' : '@/network',
                'router' : '@/router',
                'store' : '@/store',
                'views' : '@/views',
            }
        }
    },
    publicPath: './'

}


