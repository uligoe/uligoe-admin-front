import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 配置 @ 符号
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")// 在src文件下的相对路径都可以写成 @ 符号
    }
  },

})
