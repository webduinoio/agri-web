import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/agri-web/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // 只在 build 階段排除 stagewise，preview 階段保留
        if (process.env.NODE_ENV === 'production' && 
            process.env.npm_lifecycle_event === 'build' && 
            id.includes('@stagewise')) {
          return true
        }
        return false
      }
    }
  },
  define: {
    // 確保process.env.NODE_ENV在瀏覽器中可用
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  // 為 preview 模式設定優化
  preview: {
    port: 4173
  }
}) 