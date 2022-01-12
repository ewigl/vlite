import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@router/router' // 引入路由
import { store, key } from '@store/store' // 引入 vuex

// import ElementPlus from 'element-plus'  // 引入element-plus
// import 'element-plus/dist/index.css'    // 引入element-plus的样式

import '@styles/index.less' // 引入全局样式

const app = createApp(App)

app.use(router).use(store, key)
// .use(ElementPlus)    // 引入element-plus

app.mount('#app')
