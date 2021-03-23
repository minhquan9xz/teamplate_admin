import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Product from '@/views/Product'
// import App from '@/App'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            header: true,
            footer: true,
            sidebar: true,
        }
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product,
        meta: {
            header: true,
            footer: true,
            sidebar: true,
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router