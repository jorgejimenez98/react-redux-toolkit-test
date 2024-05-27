import { useEffect, useRef } from "react"

export const useHtmlDocument = () => {
  const bodyElementRef = useRef<HTMLBodyElement | null>(document.body as HTMLBodyElement)

  const setOverFlow = (value: "hidden" | "auto") => {
    if (bodyElementRef.current) {
      bodyElementRef.current.style.overflow = value
    }
  }

  useEffect(() => {
    return () => {
      setOverFlow("auto")
    }
  }, [])

  return {
    bodyElementRef,
    setOverFlow
  }
}
