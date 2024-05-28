const icons = [
  "edit",
  "delete",
  "visibility"
] as const


Object.freeze(icons)

export type IconVariant = typeof icons[number]