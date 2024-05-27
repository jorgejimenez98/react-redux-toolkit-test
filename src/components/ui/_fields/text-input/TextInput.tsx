import React, { useRef, useEffect } from "react"

import { useField } from "formik"

import { Text } from "../.."
import { Field } from "../field/Field"

import type { TextInputProps } from "./text-input.properties"

export const TextInput: React.FC<TextInputProps> = props => {
  const { placeholder, alias, autoFocus, className, containerClassName, ...restProps } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

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
      <input
        id={alias}
        type='text'
        ref={inputRef}
        {...field}
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