import React from "react"

import type { TextProps } from "./text.properties"

const Text: React.FC<TextProps> = ({
  size,
  type,
  weight,
  tag: Tag = "span",
  transform,
  decoration,
  children,
  htmlFor,
  className
}) => {

  const CLASS_NAMES = [
    // Size
    size ? `fs-${size}` : "",

    // Type (Color)
    type ? `text-${type}` : "",

    // Weight
    weight ? `fw-${weight}` : "",

    // Transform
    transform ? `text-${transform}` : "",

    // Text decoration
    decoration ? `text-decoration-${decoration}` : "",

    // Extra Classes
    className

  ].filter(Boolean).join(" ")

  return (
    <Tag
      className={CLASS_NAMES}
      htmlFor={Tag === "label" ? htmlFor : undefined}
    >
      {/* Text */}
      {children}
    </Tag>
  )
}

export default Text
