import React from "react"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"
import { Button, Divider, Modal, Text } from "@/components/ui"
import { hideConfirmModal, selectConfirmModalVisible } from "@/stores/slices"
import { useAppDispatch, useAppSelector } from "@/stores/store"

const ConfirmModal: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const confirmModal = useAppSelector(selectConfirmModalVisible)

  if (!confirmModal) return null

  const { visible, title, message, onAccept } = confirmModal

  const handleClose = () => {
    dispatch(hideConfirmModal())
  }

  const handleAccept = () => {
    onAccept()
    handleClose()
  }

  return (
    <Modal size="md" visible={visible} title={title} handleClose={handleClose}>
      <Flex direction="col" gap="2" justify="center">
        <Text size="6">
          {message}
        </Text>

        <Divider className="mt-3 mb-2" />

        <Button
          text={t("General.Accept")}
          onClick={handleAccept}
        />
      </Flex>
    </Modal>
  )
}

export default ConfirmModal
