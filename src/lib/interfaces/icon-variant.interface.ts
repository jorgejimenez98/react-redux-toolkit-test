const icons = [
  "edit",
  "delete",
  "visibility",
  "arrow_back"
] as const


Object.freeze(icons)

export type IconVariant = typeof icons[number]