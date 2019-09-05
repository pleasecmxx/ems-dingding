import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {
    Login,
    RootView,
    ProductList,
    Categories
} from './../pages'




const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: RootView,
            redirect: '/ProductList',
            children: [
                {
                    path: '/ProductList',
                    name: '快捷菜单',
                    component: ProductList,
                },
                {
                    path: '/Categories',
                    name: '商品分类管理',
                    component: Categories,
                }
            ]
        }, {
            path: '/login',
            name: '登录',
            component: Login,
        }
    ]
})


export default router;