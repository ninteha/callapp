import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public'),
      '@mixins': path.resolve(__dirname, './src/styles/mixins'),
      '@colors': path.resolve(__dirname, './src/styles/variables'),
    },
  },
  build: {
    chunkSizeWarningLimit: 900,
  },
  plugins: [
    react()
  ],

})