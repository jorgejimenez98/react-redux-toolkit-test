import React from "react"

interface FlexProps {
  children: React.ReactNode
  className?: string
  gap?: string
  justify?: "start" | "end" | "center" | "between" | "around"
  align?: "start" | "end" | "center" | "baseline" | "stretch"
  direction?: "row" | "col" | "row-rev" | "col-rev"
  wrap?: boolean
  xsdir?: "col" | "row"
}

const Flex: React.FC<FlexProps> = props => {
  // Desctructure Props
  const { className, gap, justify, align, direction, wrap, xsdir, children } = props

  // Get Bootstrap flex direction class
  const directionClassMap: Record<string, string> = {
    "row": "flex-row",
    "col": "flex-column",
    "row-rev": "flex-row-reverse",
    "col-rev": "flex-column-reverse"
  }

  const CLASS_NAMES = [
    // Default Classes
    "d-flex",

    // Gap
    gap ? `gap-${gap}` : "",

    // Direction
    directionClassMap[direction || ""] || "",

    // Justify
    justify ? `justify-content-${justify}` : "",

    // Align
    align ? `align-items-${align}` : "",

    // Wrap
    wrap ? "flex-wrap" : "",

    // Movile classes
    xsdir === "col" ? "app-flex-sm-column" : "",

    className
  ].filter(Boolean).join(" ")

  return (
    <div className={CLASS_NAMES}>
      {children}
    </div>
  )
}

export default Flex
