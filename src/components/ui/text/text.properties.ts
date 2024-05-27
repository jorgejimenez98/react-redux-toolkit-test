type Tag = "p" | "span" | "h3" | "h1" | "small" | "label"
type TextType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "muted" | "white" | "black"
type TextSize = "1" | "2" | "3" | "4" | "5" | "6"
type TextWeigth = "bold" | "bolder" | "normal" | "light" | "lighter"
type TextTransform = "lowercase" | "uppercase" | "capitalize"
type TextDecoration = "underline" | "line-through" | "none"

export interface TextProps {
  size?: TextSize
  type?: TextType
  weight?: TextWeigth
  tag?: Tag
  transform?: TextTransform
  decoration?: TextDecoration
  children: React.ReactNode
  className?: string
}