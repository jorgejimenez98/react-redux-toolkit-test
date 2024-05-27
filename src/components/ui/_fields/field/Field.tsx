import React from "react"

import { Text } from "../../"

export interface FieldProps {
  children?: React.ReactNode
  label?: string,
  className?: string
  alias: string
}

export const Field: React.FC<FieldProps> = props => {
  const { children, label, alias, className } = props

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <Text
          type='muted'
          tag='label'
          htmlFor={alias}
          className="fs-7"
        >
          {label}
        </Text>
      )}

      {/* Input */}
      {children}
    </div>
  )
}