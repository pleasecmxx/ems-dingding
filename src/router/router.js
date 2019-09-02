import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = () => import('./../pages/Home')


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})


export default router;