import authSlice, { selectCurrentUser, setUser } from "./auth/authSlice"
import postsSlice from "./posts/posts.slice"
import uiSlice, { showConfirmModal, hideConfirmModal, showToast, hideToast, selectConfirmModalVisible } from "./ui/ui.slice"

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

// Export UI Functions
export {
  selectConfirmModalVisible,
  showConfirmModal,
  hideConfirmModal,
  showToast,
  hideToast
}