import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {
    RootView,
    ProductList
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
                }
            ]
        }
    ]
})


export default router;