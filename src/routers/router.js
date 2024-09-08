import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
// import Cars from '@/pages/Cars.vue'
// import About from '@/pages/About.vue'
const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/cars', name: 'Cars', component: () => import('@/pages/Cars.vue')},
        {path: '/cars/:id', name: 'CurrentCar', component: () => import('@/pages/CurrentCar.vue')},
        {path: '/about', name: 'About', component:  () => import('@/pages/About.vue')},
        {path: '/:matchFound(.*)*', name: '404', component:  () => import('@/pages/NotFound.vue')}
    ]
})

export default routers