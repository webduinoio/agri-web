import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 3003,
    open: true
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // 在生產環境建置時排除stagewise
        if (process.env.NODE_ENV === 'production' && id.includes('@stagewise')) {
          return true
        }
        return false
      }
    }
  },
  define: {
    // 確保process.env.NODE_ENV在瀏覽器中可用
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
}) 