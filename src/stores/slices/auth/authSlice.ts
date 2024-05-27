import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { ENV } from "@/lib/constants"
import { AuthSliceState, AuthUser } from "@/lib/interfaces"
import type { RootState } from "@/stores/store"

const readUserFromLocalStorage = (): AuthUser | null => {
  const storedUser = localStorage.getItem(ENV.USER_LOCALSTORAGE_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

const initialState = { user: readUserFromLocalStorage() } as AuthSliceState

const slice = createSlice({
  name: "auth",

  // States
  initialState,

  // Reducers
  reducers: {
    setUser: (state, { payload }: PayloadAction<AuthUser>) => {
      state.user = payload
    }
  }
})

export const { setUser } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
