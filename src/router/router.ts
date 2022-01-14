import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/layout.vue'
// import DataTable from '@views/Data/Table.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@views/Dashboard/Dashboard.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@views/Data/Table.vue'),
        // component: DataTable,
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },
  { path: '/404', component: () => import('@views/404/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
