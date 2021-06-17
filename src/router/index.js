import Vue from 'vue'
import Router from 'vue-router'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}




Vue.use(Router)


const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const Cart = () => import("views/cart/Cart.vue")
const Profile = () => import("views/profile/Profile.vue")
const Detail = () =>import('views/detail/Detail.vue')

const routes = [
    {
        path : "",
        redirect : '/home'
    },
    {
        path : '/home',
        name : "home",
        component : Home
    },
    {
        path : '/category',
        name : "category",
        component : Category
    },
    {
        path : '/cart',
        name : "cart",
        component : Cart
    },
    {
        path : '/profile',
        name : "profile",
        component : Profile
    },
    {
        path : '/detail/:id',
        name : "detail",
        component : Detail
    },
]



const router = new Router({
    routes,
    mode:"history",
    base: './'
})

export default router




