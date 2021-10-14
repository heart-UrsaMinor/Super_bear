import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ("../views/home/home")
const category = () =>
    import ("../views/category/category")
const cart = () =>
    import ("../views/cart/cart")
const profile = () =>
    import ("../views/profile/profile")
const add = () =>
    import ("../views//add/add")
Vue.use(VueRouter)

const routes = [{
    path: "",
    redirect: "/home"
}, {
    path: "/home",
    component: home
}, {
    path: "/category",
    component: category
}, {
    path: "/cart",
    component: cart
}, {
    path: "/profile",
    component: profile
}, {
    path: "/add",
    component: add
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router