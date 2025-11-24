import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',

  server: {
    host: true, // Ini sudah benar agar bisa diakses device lain
    proxy: {
      // PERBAIKAN DI SINI:
      '/api': {
        target: 'http://localhost:5000', // Target backend kamu
        changeOrigin: true,
        secure: false,
      },
    },
  },
})