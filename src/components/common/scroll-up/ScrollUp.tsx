import React, { useState, useEffect } from "react"

import "./scroll-up.styles.scss"

import { Icon } from "@/components/ui"
import { helper } from "@/lib/helpers"

const ScrollUp: React.FC = () => {
  const [buttonIsVisible, setButtonIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setButtonIsVisible(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return buttonIsVisible && (
    <button
      className="btn btn-primary animate-up scroll-up-button btn-circle round-hover text-white"
      onClick={() => helper.scrollToTop()}
    >
      <Icon name="arrow_upward" className="scroll-icon" />
    </button>
  )
}

export default ScrollUp
