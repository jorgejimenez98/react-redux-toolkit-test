import { useState, useEffect } from "react"

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState<boolean>(windowWidth <= 800)

  const updateWindowWidth = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    setIsMobile(width <= 800)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth)
    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }
  }, [])

  return {
    windowWidth,
    isMobile
  }
}
