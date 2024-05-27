import type { FieldHookConfig } from "formik"

import { FieldProps } from "../field/Field"

export type TextInputProps = FieldProps & FieldHookConfig<string> & {
    autoFocus?: boolean
    placeholder?: string
    containerClassName?: string
    alias: string
}