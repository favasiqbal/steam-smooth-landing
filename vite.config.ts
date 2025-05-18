import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/steam-smooth-landing/', // REQUIRED for GitHub Pages
  plugins: [react()],
})
