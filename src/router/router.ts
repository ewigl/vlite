import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import Layout from '@/layout/layout.vue'
import NotFound from '@/views/404/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { title: 'Dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@views/Dashboard/Dashboard.vue'),
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    name: 'Data',
    meta: { title: 'Data', icon: 'database' },
    children: [
      {
        path: '/data/table',
        name: 'Table',
        component: App,
        meta: { title: 'Table', icon: 'table' },
        children: [
          {
            path: '/data/table/list',
            name: 'TableList',
            component: () => import('@views/Data/TableList.vue'),
            meta: { title: 'TableList', icon: 'table-list' }
          },
          {
            path: '/data/table/edit',
            name: 'TableEdit',
            component: () => import('@views/Data/TableEdit.vue'),
            meta: { title: 'TableEdit', icon: 'table-edit' }
          }
        ]
      },
      {
        path: '/data/form',
        name: 'Form',
        component: () => import('@views/Data/Form.vue'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'System',
    children: [
      {
        path: '/system',
        name: 'System',
        component: () => import('@views/System/System.vue'),
        meta: { title: 'User', icon: 'user' }
      },
      {
        path: '/system/user',
        name: 'User',
        component: () => import('@views/System/User.vue'),
        meta: { title: 'User', icon: 'user' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Layout,
    meta: { title: 'NotFound', icon: '404', hidden: true },
    children: [
      {
        path: '',
        name: 'NotFound',
        component: NotFound
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
