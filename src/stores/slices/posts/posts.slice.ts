import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { PostSliceState, Post } from "@/lib/interfaces"
import { postsApi } from "@/services/posts/posts.service"

const slice = createSlice({
  name: "posts",

  // States
  initialState: {
    posts: []
  } as PostSliceState,

  // Reducers
  reducers: {},

  // Listeners for api calls
  extraReducers: builder => {
    builder
      .addMatcher(
        postsApi.endpoints.getPosts.matchFulfilled,
        (state, { payload }: PayloadAction<Post[]>) => {
          state.posts = payload
        }
      )
  }
})


export default slice.reducer
