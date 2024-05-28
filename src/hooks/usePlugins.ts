import { useDispatch } from "react-redux"

import { UiConfirmModalData } from "@/lib/interfaces"
import { UiToastPayload } from "@/lib/interfaces/ui.interface"
import { showConfirmModal, showToast } from "@/stores/slices"

export const usePlugins = () => {
  const dispatch = useDispatch()

  const confirm = (payload: UiConfirmModalData) => {
    dispatch(showConfirmModal(payload))
  }

  const toast = (payload: UiToastPayload) => {
    dispatch(showToast(payload))
  }

  return { confirm, toast }
}
