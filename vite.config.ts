import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite' //ElementPlusAutoImport
import Components from 'unplugin-vue-components/vite' //ElementPlusComponents
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' //ElementPlus
import Icons from 'unplugin-icons/vite' //Icons
import IconsResolver from 'unplugin-icons/resolver' //IconsResolver

export default defineConfig({
  base: './',
  server: {
    port: 8486
    // hmr: {
    // overlay: false
    // }
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
      resolvers: [ElementPlusResolver(), IconsResolver()]
    }),
    Icons({
      scale: 1.6 // 图标缩放比例
      // defaultStyle: '', // Style apply to icons
      // defaultClass: '', // Class names apply to icons
      // compiler: null, // 'vue2', 'vue3', 'jsx'
      // jsx: 'react' // 'react' or 'preact'
    }) // 引入图标插件
  ]
})
