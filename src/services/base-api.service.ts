import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"

import { ENV } from "@/lib/constants"

// Create baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: ENV.BACKEND_URL,
  prepareHeaders: headers => {
    // Headers for petitions
    return headers
  }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  // All App tags
  tagTypes: ["Posts"],

  // Define endpoints for childrens
  endpoints: () => ({})
})
