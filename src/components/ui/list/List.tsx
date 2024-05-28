/* eslint-disable no-unused-vars */
import React from "react"

interface ListProps<T> {
    className?: string
    items: T[]
    renderItem: (item: T, index: number) => React.ReactNode
}

const List = <T, >({ className, items, renderItem }: ListProps<T>): JSX.Element => {
  const CLASS_NAMES = ["list-group card-shadow", className].filter(Boolean).join(" ")

  return (
    <ul className={CLASS_NAMES}>
      {items.map((item, index) => renderItem(item, index))}
    </ul>
  )
}

export default List
