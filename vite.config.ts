import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {  // 对于模块的解析
    alias: {  // 别名
      '@': resolve(__dirname, 'src'), // 将 src 文件夹设置为 @
      '@layout': resolve(__dirname, 'src/layout'),
      '@views': resolve(__dirname, 'src/views'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@static': resolve(__dirname, 'src/static'),
    }
  },
  plugins: [vue()]  // vite-plugin-vue  

})
