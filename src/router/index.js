import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Ceshi = () => import('../components/Ceshi.vue')
const Type = () => import('../views/type/Type.vue')
const Discovery = () => import('../views/discovery/Discovery.vue')
const Cart = () => import('../views/cart/Cart.vue')
const My = () => import('../views/my/My.vue')
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home,
            name: 'home'
        }, {
            path: '/type',
            name: 'type',
            component: Type
        }, {
            path: '/discovery',
            name: 'discovery',
            component: Discovery
        }, {
            path: '/cart',
            name: 'cart',
            component: Cart
        }, {
            path: '/my',
            name: 'my',
            component: My
        },
        {
            path: '/ceshi/:userId',
            name: 'ceshi',
            component: Ceshi
        }, {
            path: '*',
            component: () =>
                import ('@/components/Error404.vue')
        }

    ],
})