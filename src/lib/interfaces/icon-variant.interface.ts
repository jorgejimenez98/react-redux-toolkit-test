const icons = [
  "edit",
  "delete"
] as const

Object.freeze(icons)

export type IconVariant = typeof icons[number]