import React, { useEffect } from "react"

import ReactDOM from "react-dom"

import "./modal.styles.scss"

import Text from "../text/Text"

import { ModalProps } from "./modal.properties"

import { Flex } from "@/components/layouts"
import { useHtmlDocument } from "@/hooks"

const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  children,
  size = "lg",
  handleClose
}) => {
  const { setOverFlow } = useHtmlDocument()

  useEffect(() => {
    setOverFlow(visible ? "hidden" : "auto")
    return () => setOverFlow("auto")
  }, [visible, setOverFlow])

  const modalRoot = document.getElementById("modal-root")

  if (!visible || !modalRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={"modal modal-mask show fade-in"} role="dialog">
      <div className={`modal-dialog modal-${size} modal-dialog-centered`}>
        <div className="modal-content animate-up">

          {/* Header */}
          <div className="modal-header">

            <Flex justify="between" className="w-100">
              <Text className="default-title">
                {title}
              </Text>

              <button
                type="button"
                className="btn-close close-icon"
                onClick={handleClose}
              />
            </Flex>
          </div>

          {/* Content */}
          <div className={"app-modal-body modal-body-overflow p-3"}>
            {children}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
