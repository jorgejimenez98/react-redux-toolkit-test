import { useState } from "react"

export const useModal = <T = unknown>() => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<T | null>(null)

  // Function to open a modal
  const openModal = (data?: T) => {
    setTimeout(() => {
      if (!data) {
        setVisible(true)
        return
      }

      // Update state
      setData(data)
      setVisible(true)
    }, 1)
  }

  // Function to close the modal
  const closeModal = () => {
    setTimeout(() => {
      // Reset state
      setData(null)
      setVisible(false)
    }, 1)
  }

  return {
    // States
    visible,
    data,

    // Functions
    openModal,
    closeModal
  }
}
