import authSlice, { selectCurrentUser, setUser } from "./auth/authSlice"
import postsSlice, { deletePost, editPost } from "./posts/posts.slice"
import uiSlice, { showConfirmModal, hideConfirmModal, selectConfirmModalVisible } from "./ui/ui.slice"

export const appSlices = {
  auth: authSlice,
  posts: postsSlice,
  ui: uiSlice
}

// Export Auth functions
export {
  selectCurrentUser,
  setUser
}

// Export Post Functions
export {
  allUserPostsSelector,
  selectPostsByUserId
} from "./posts/posts-slice.selectors"

export {
  deletePost,
  editPost
}

// Export UI Functions
export {
  selectConfirmModalVisible,
  showConfirmModal,
  hideConfirmModal
}