import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Enable React JSX handling with the smallest Vite config needed to run locally.
// No extra plugins or build customization are included at this stage.
export default defineConfig({
  plugins: [react()],
})
