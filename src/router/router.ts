import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Content from '@/layout/Content/Content.vue'
import Layout from '@/layout/layout.vue'
import NotFound from '@/views/404/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    meta: { title: '首页', icon: 'dashboard' },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@views/Dashboard/Dashboard.vue')
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    name: 'Data',
    meta: { title: '数据', icon: 'database' },
    children: [
      {
        path: '/data/table',
        name: 'Table',
        component: Content,
        meta: { title: '表格', icon: 'table' },
        children: [
          {
            path: '/data/table/list',
            name: 'TableList',
            component: () => import('@views/Data/TableList.vue'),
            meta: { title: '基础表格', icon: 'table' }
          },
          {
            path: '/data/table/todo',
            name: 'ToDo',
            component: () => import('@views/Data/TableEdit.vue'),
            meta: { title: 'ToDo', icon: 'table' }
          }
        ]
      },
      {
        path: '/data/form',
        name: 'Form',
        component: () => import('@views/Data/Form.vue'),
        meta: { title: '表单', icon: 'table' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'System',
    meta: { title: '系统', icon: 'setting' },
    children: [
      {
        path: '/system',
        name: 'System',
        component: () => import('@views/System/System.vue'),
        meta: { title: '系统', icon: 'setting' }
      },
      {
        path: '/system/user',
        name: 'User',
        component: () => import('@views/System/User.vue'),
        meta: { title: '用户', icon: 'user' }
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
