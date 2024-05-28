import React from "react"

import { Modal } from "@/components/ui"
import { Post } from "@/lib/interfaces"

interface UserPostFormModalProps {
    data: Post
    visible: boolean
    handleClose: () => void
}

const UserPostFormModal: React.FC<UserPostFormModalProps> = props => {
  const { visible, handleClose } = props

  return (
    <Modal
      title="Editar Post"
      visible={visible}
      handleClose={handleClose}
    >
        Content here....
    </Modal>
  )
}

export default UserPostFormModal