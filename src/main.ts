import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@router/router' // 引入路由
import { store, key } from '@store/store' // 引入 vuex

import '@styles/index.less' // 引入全局样式

import '//at.alicdn.com/t/font_2621077_n8ms1ns7yum.js' // 引入图标
import SvgIcon from '@components/SvgIcon/SvgIcon.vue' // 引入 svg-icon 组件

const app = createApp(App)

app.component('svg-icon', SvgIcon) // 全局注册 svg-icon 组件

app.use(router).use(store, key)

app.mount('#app')
