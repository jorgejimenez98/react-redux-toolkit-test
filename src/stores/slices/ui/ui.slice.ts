// src/slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { UiState, UiConfirmModalData } from "@/lib/interfaces"
import { UiToastPayload } from "@/lib/interfaces/ui.interface"
import { RootState } from "@/stores/store"

const initialState: UiState = {
  confirmModal: null,
  toast: null
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
    },

    // Modal Confirm
    showToast: (state, { payload } : PayloadAction<UiToastPayload>) => {
      state.toast = payload
    },
    hideToast: state => {
      state.toast = null
    }
  }
})

export const { showConfirmModal, hideConfirmModal, showToast, hideToast } = uiSlice.actions
export default uiSlice.reducer

export const selectConfirmModalVisible = (state: RootState) => state.ui.confirmModal
export const selectToastVisible = (state: RootState) => state.ui.toast
