import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // CSS config
  css: {
    // Import variables.scss for all files
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/styles/variables.scss';"
      }
    }
  }
})
