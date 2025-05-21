// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if using custom domain
const useCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

export default defineConfig({
  plugins: [react()],
  base: useCustomDomain ? '/' : (process.env.NODE_ENV === 'production' ? '/beesbridge-remake/' : '/'),
})
