export const ENV = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
  USER_LOCALSTORAGE_KEY: import.meta.env.VITE_USER_LOCALSTORAGE_KEY
}

Object.freeze(ENV)