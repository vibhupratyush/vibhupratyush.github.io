import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',                 // user site => root
  plugins: [react()],
  build: { outDir: 'dist' }, // what the workflow uploads
})
