import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Projet from './views/Projet.vue'
import Admin from './views/Admin.vue'
import Doc from './views/Doc.vue'

const routes = [
    { path: '/homepage', component: HomePage },
    { path: '/projet', component: Projet },
    { path: '/admin', component: Admin },
    { path: '/doc', component: Doc },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
