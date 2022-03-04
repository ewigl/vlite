import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite' //ElementPlusAutoImport
import Components from 'unplugin-vue-components/vite' //ElementPlusComponents
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' //ElementPlus

export default defineConfig({
  base: './', // 项目根目录
  envPrefix: 'V_', // 变量前缀
  server: {
    port: 8486 // 服务端口
  },
  resolve: {
    // 对于模块的解析
    alias: {
      // 别名
      '@': resolve(__dirname, 'src'), // 将 src 文件夹设置为 @
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@router': resolve(__dirname, 'src/router'),
      '@store': resolve(__dirname, 'src/store'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@views': resolve(__dirname, 'src/views')
    }
  },
  plugins: [
    vue(), // 引入 vue 插件 vite-plugin-vue
    AutoImport({
      // 引入自动导入插件
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 引入组件插件
      resolvers: [ElementPlusResolver()]
    })
  ]
})
