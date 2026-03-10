import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/casa_fatima/', // C'est cette ligne qui dira à GitHub où trouver ton site !
})