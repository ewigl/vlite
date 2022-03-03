import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@router/router' // 引入路由
import { store, key } from '@store/store' // 引入 vuex

import '@styles/index.less' // 引入全局样式

const app = createApp(App)

app.use(router).use(store, key)

app.mount('#app')
