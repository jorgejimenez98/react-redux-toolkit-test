import React from "react"

import "./logo.styles.scss"
import { useWindowSize } from "@/hooks"

const Logo: React.FC<{ text: string }> = ({ text }) => {
  const { isMobile } = useWindowSize()

  return (
    <div className="logo">
      <span className="text-gray">&lt;</span>
      <span className="logo-text">
        {!isMobile ? text : text[0]}
      </span>
      <span className="text-gray">/&gt;</span>
    </div>
  )
}

export default Logo