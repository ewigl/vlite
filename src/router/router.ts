import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
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
    name: 'Data',
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@views/Data/Table.vue'),
        meta: { title: 'Table', icon: 'table' },
        children: [
          {
            path: 'table-list',
            name: 'TableList',
            component: () => import('@views/Data/TableList.vue'),
            meta: { title: 'TableList', icon: 'table-list' }
          }
        ]
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@views/Data/Form.vue'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'User',
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('@views/System/User.vue'),
        meta: { title: 'User', icon: 'user' }
      }
    ]
  }
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@views/404/index.vue'),
  //   meta: { title: '404', icon: '404' }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
