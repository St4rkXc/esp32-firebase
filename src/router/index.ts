import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SectorViewVue from '@/views/SectorView.vue'
import PotsViewVue from '@/views/PotsView.vue'
import InformationViewVue from '@/views/InformationView.vue'
import { KeepAlive } from 'vue'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/sector',
            name: 'sector',
            component : SectorViewVue,
        },
        {
            path: '/pots',
            name: 'pots',
            component: PotsViewVue,
        },
        {
            path: '/information',
            name: 'information',
            component: InformationViewVue
        }
    ],
})

export default router
