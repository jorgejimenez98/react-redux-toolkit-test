import React, { useRef, useEffect } from "react"

import { useField } from "formik"

import { Text } from "../.."
import { Field } from "../field/Field"

import type { TextAreaProps } from "./text-area.properties"

export const TextArea: React.FC<TextAreaProps> = props => {
  const { placeholder, alias, autoFocus, className, rows = 5, containerClassName, ...restProps } = props

  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  const [field, meta] = useField(restProps)
  const hasError = meta.touched && meta.error

  const INPUT_CLASSNAMES = [
    "form-control",
    containerClassName
  ].filter(Boolean).join(" ")

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus()
  }, [autoFocus])

  return (
    <Field
      label={props.label}
      alias={alias}
      className={className}
    >
      {/* Input */}
      <textarea
        id={alias}
        ref={inputRef}
        {...field}
        rows={rows}
        placeholder={placeholder}
        className={INPUT_CLASSNAMES}
      />

      {/* Error */}
      {hasError && (
        <Text size='6' type='danger' className="ms-1 mt-1">
          {meta.error}
        </Text>
      )}
    </Field>
  )
}