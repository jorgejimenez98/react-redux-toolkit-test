import React from "react"

import { Text } from ".."

import { ButtonProps } from "./button.properties"

import { Flex } from "@/components/layouts"


const Button: React.FC<ButtonProps> = ({
  size = "lg",
  text,
  variant = "warning",
  block = false,
  disabled = false,
  outline = false,
  centered = true,
  onClick,
  className,
  children,
  ...restProps
}) => {

  const buttonClasses = [
    // Default classes
    "btn round-hover",
    className,

    // Size
    `btn-${size}`,

    // Color
    variant && !outline ? `btn-${variant}` : "",

    // Full Width
    block ? "w-100" : "",

    // OutLined
    outline ? `btn-outline-${variant} no-hover` : ""
  ].filter(Boolean).join(" ")

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      <Flex
        gap="2"
        justify={centered ? "center" : "start"}
        align="center"
      >

        {/* Btn Text */}
        {text && (
          <Text type={"black"} size={"6"}>
            {text}
          </Text>
        )}

        {/* Default children */}
        {children}
      </Flex>
    </button>
  )
}

export default Button
