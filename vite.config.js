import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // This will intercept any request to '/api' and proxy it to your target API
      '/api': {
        target: 'https://sennik.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' prefix when forwarding
        secure: true,  // Set to true if you're targeting a secure (HTTPS) backend
      },
    },
  },
  plugins: [react()],
  base: '/'
})
