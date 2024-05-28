/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    }
  },

  env: {
    VITE_FRONTEND_URL: "http://localhost:5173",
    VITE_BACKEND_URL: "https://jsonplaceholder.typicode.com",
    VITE_USER_LOCALSTORAGE_KEY: "user-local"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
