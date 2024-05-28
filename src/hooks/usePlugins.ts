import { useDispatch } from "react-redux"

import { UiConfirmModalData } from "@/lib/interfaces"
import { showConfirmModal } from "@/stores/slices"

export const usePlugins = () => {
  const dispatch = useDispatch()

  const confirm = (payload: UiConfirmModalData) => {
    dispatch(showConfirmModal(payload))
  }


  return { confirm }
}
