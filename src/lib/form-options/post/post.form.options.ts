import type { TFunction } from "i18next"
import * as Yup from "yup"

export const postFormSchema = (t: TFunction) => Yup.object({
  title: Yup.string().required(t("Validations.Required")),
  body: Yup.string().required(t("Validations.Required"))
})