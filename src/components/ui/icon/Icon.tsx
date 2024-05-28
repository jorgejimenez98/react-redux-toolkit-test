import React from "react"

import { IconVariant } from "@/lib/interfaces"

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: IconVariant
    className?: string
    onClick?: () => void
}

const Icon: React.FC<IconProps> = ({ name, className, onClick, ...restProps }) => {

  const CLASS_NAMES = [
    "material-symbols-outlined",
    onClick ? "pointer round-hover": "",
    className
  ].join(" ")

  return (
    <span
      className={CLASS_NAMES}
      onClick={onClick}
      {...restProps}
    >
      {name}
    </span>
  )
}

export default Icon