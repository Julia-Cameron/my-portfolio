import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Enable React support and fast refresh while developing.
export default defineConfig({
  plugins: [react()],
})
