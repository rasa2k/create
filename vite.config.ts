import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: '/'
  },
  preview: {
    port: 3000,
    https: true,
    open: '/'
  },
  build: {
    outDir: './dist',
    sourcemap: false,
    minify: true,
    cssMinify: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  },
  plugins: [
    react(),
    mkcert(),
    checker({
      typescript: true,
      terminal: true,
      overlay: true,
      enableBuild: false
    })
  ]
})
