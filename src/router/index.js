import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '../views/Accueil.vue'

const basicName = "%NAME% - Ashless Network"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: basicName.replace("%NAME%", "Accueil"),
            component: Accueil,
        },
        {
            path: '/nous-rejoindre',
            name: basicName.replace("%NAME%", "Nous rejoindre"),
            component: () => import('../views/NousRejoindre.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: basicName.replace("%NAME%", "404"),
            redirect: '/'
        }
    ]
})

export default router
