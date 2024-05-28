import { api } from "../base-api.service"

import { ENDPOINTS } from "@/lib/constants"
import { Post } from "@/lib/interfaces"

export const postsApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<Post[], void>({
      query: () => ({ url: ENDPOINTS.POSTS })
    })
  })
})

export const {
  useGetPostsQuery
} = postsApi
