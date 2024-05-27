import React from "react"

interface DividerProps {
  color?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "#115da1",
  className
}) => {

  // Class names
  const CLASS_NAMES = [
    "border-top",
    className
  ].filter(Boolean).join(" ")

  // Styles for divider
  const STYLES: React.CSSProperties = {
    height: "",
    borderTop: `0.1rem solid ${color}`
  }

  return (
    <div
      className={CLASS_NAMES}
      style={STYLES}
    />
  )
}

export default Divider
