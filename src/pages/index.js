const Login = () => import('./user-model/login.vue')
const RootView = () => import('./Root.vue')
const ProductList = () => import('./sub-pages/ProductList.vue')
const Categories = () => import('./sub-pages/Categories.vue')
const Shop = () => import('./sub-pages/Shop.vue')



export {      
    Login,                                                                     
    RootView,
    ProductList,
    Categories,
    Shop
}