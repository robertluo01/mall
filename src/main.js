import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "store/index"
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false


//添加事件总线对象
Vue.prototype.$bus = new Vue();

//使用toast插件
Vue.use(toast)
Vue.use(VueLazyload,{
  loading : require('./assets/img/common/placeholder.png'),
    error : require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body)




new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app')

