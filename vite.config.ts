import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Garantir compatibilidade ao importar rota de API em Vercel
      '@': path.resolve(__dirname, './src'),
    },
  },
})
