import Vue from 'vue'
import VueRouter from 'vue-router'

// 1、安装插件
Vue.use(VueRouter)

// 2、创建router
const routes = [
    {
        path:'',
        redirect:'/home',
        meta:{
            TabbarShow:true  //需要显示底部导航栏
        }
    },
{
    path:'/home',
    component: () => import('../views/home/Home'),
    meta:{
        TabbarShow:true  //需要显示底部导航栏
    }
},
{
    path:'/category',
    component: () => import('../views/category/Category'),
    meta:{
        TabbarShow:true  //需要显示底部导航栏
    }
},
{
    path:'/cart',
    component: () => import('../views/cart/Cart'),
    meta:{
        TabbarShow:true  //需要显示底部导航栏
    }
},
{
    path:'/profile',
    component: () => import('../views/profile/Profile'),
    meta:{
        TabbarShow:true  //需要显示底部导航栏
    }
},
{
    path:'/detail/:iid',
    component: () => import('../views/detail/Detail'),
    meta:{
        TabbarShow:false  //需要显示底部导航栏
    }
},
{
    path:'/other',
    component: () => import('../views/other/Other'),
    meta:{
        TabbarShow:true  //需要显示底部导航栏
    }
},
]
const router = new VueRouter({
routes,
mode:'history'
})

// 3、导出
export default router