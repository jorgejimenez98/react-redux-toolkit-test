import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { AuthSliceState, AuthUser } from "@/lib/interfaces"
import type { RootState } from "@/stores/store"

const slice = createSlice({
  name: "auth",

  // States
  initialState: { user: null } as AuthSliceState,

  // Reducers
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ user: AuthUser }>) => {
      state.user = payload.user
    }
  }
})

export const { setUser } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
