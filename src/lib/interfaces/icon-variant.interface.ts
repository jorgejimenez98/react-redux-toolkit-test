const icons = [
  "arrow_back",
  "arrow_upward",
  "delete",
  "edit",
  "visibility"
] as const


Object.freeze(icons)

export type IconVariant = typeof icons[number]