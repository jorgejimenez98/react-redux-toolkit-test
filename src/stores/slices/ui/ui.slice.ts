// src/slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { UiState, UiConfirmModalData } from "@/lib/interfaces"
import { RootState } from "@/stores/store"

const initialState: UiState = {
  confirmModal: null
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Modal Confirm
    showConfirmModal: (state, { payload } : PayloadAction<UiConfirmModalData>) => {
      state.confirmModal = {
        visible: true,
        ...payload
      }
    },
    hideConfirmModal: state => {
      state.confirmModal = null
    }
  }
})

export const { showConfirmModal, hideConfirmModal } = uiSlice.actions
export default uiSlice.reducer

export const selectConfirmModalVisible = (state: RootState) => state.ui.confirmModal
