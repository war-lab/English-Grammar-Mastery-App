import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/English-Grammar-Mastery-App/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
