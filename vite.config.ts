import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入node提供的内置模块path：可以获取绝对路径 p
// __dirname标红请运行：pnpm i @types/node --save-dev
import path from  'path'
export default defineConfig({
  plugins: [vue()],
  // src文件夹配置别名
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
  }
})
