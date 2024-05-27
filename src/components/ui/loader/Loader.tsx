import React, { useEffect } from "react"
import "./loader.styles.scss"

import { Flex } from "@/components/layouts"
import { useHtmlDocument } from "@/hooks"

const Loader: React.FC = () => {
  const { setOverFlow } = useHtmlDocument()

  useEffect(() => {
    setOverFlow("hidden")

    return () => {
      setOverFlow("auto")
    }
  }, [setOverFlow])

  return (
    <Flex
      justify="center"
      align="center"
      className="app-spinner position-fixed"
    >
      <div
        className="spinner-grow spinner-grow-sm text-primary position-relative"
        role="status"
      />
      <div
        className="position-absolute spinner-border spinner-border-lg text-primary"
        role="status"
      />
    </Flex>
  )
}

export default Loader
