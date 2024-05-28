import authSlice, { selectCurrentUser, setUser } from "./auth/authSlice"
import postsSlice from "./posts/posts.slice"

export const appSlices = {
  auth: authSlice,
  posts: postsSlice
}

// Export Auth functions
export {
  selectCurrentUser,
  setUser
}

// Export Post Functions
export { allUserPostsSelector } from "./posts/posts-slice.selectors"