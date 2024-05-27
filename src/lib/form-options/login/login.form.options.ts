
import type { TFunction } from "i18next"
import * as Yup from "yup"

import { LoginPayload } from "@/lib/interfaces"

export const loginFormInitialValues: LoginPayload = {
  email: "",
  password: ""
}

export const loginFormSchema = (t: TFunction) => Yup.object({
  email: Yup.string().email(t("Validations.InvalidEmail")).required(t("Validations.Required")),
  password: Yup.string().required(t("Validations.Required"))
})