import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
