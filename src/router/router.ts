import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@layout/index.vue'
import Dashboard from '@views/Dashboard/index.vue'


const routes = [
    { path: '/', component: Layout },
    { path: '/dashboard', component: Dashboard },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
