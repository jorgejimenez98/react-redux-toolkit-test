import authSlice, { selectCurrentUser, setUser } from "./auth/authSlice"

export const appSlices = {
  auth: authSlice
}

// Export Auth functions
export {
  selectCurrentUser,
  setUser
}
