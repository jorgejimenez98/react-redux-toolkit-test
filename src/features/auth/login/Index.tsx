import { JSX } from "react"

import { Form, Formik } from "formik"
import { useTranslation } from "react-i18next"
import { redirect } from "react-router-dom"

import { LanguageSelector } from "@/components/common"
import { Flex } from "@/components/layouts"
import { Button, Card, Divider, Text } from "@/components/ui"
import { TextInput } from "@/components/ui/_fields"
import { useLocalStorage } from "@/hooks"
import { ENV, PAGE_URLS } from "@/lib/constants"
import { loginFormInitialValues, loginFormSchema } from "@/lib/form-options"
import { AuthUser, LoginPayload } from "@/lib/interfaces"
import { setUser } from "@/stores/slices"
import { useAppDispatch } from "@/stores/store"

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { setValue: setLocalStorageUser } = useLocalStorage<AuthUser>(ENV.USER_LOCALSTORAGE_KEY)

  const handleSubmit = ({ email }: LoginPayload) => {
    // Todo: Add backend api call for Login

    dispatch(setUser({ email }))
    setLocalStorageUser({ email })
    redirect(PAGE_URLS.HOME)
  }

  return (
    <Flex justify="center" align="center" className="w-100">
      <Card className="mt-5 mx-2 w-100 fade-in login-container">

        {/* Header */}
        <Flex justify="between" xsdir="col">

          {/* Title */}
          <Text size="4" weight="bold">
            {t("Auth.Title")}
          </Text>

          {/* Language Selector */}
          <LanguageSelector />
        </Flex>

        <Divider className="mt-3 mb-4" />

        {/* Form */}
        <Formik
          initialValues={loginFormInitialValues}
          validationSchema={loginFormSchema(t)}
          onSubmit={handleSubmit}
        >
          <Form>

            {/* Email */}
            <TextInput
              label={t("Auth.Email")}
              placeholder={t("Auth.Email")}
              alias="email"
              name="email"
              type="email"
            />

            {/* Password */}
            <TextInput
              className="mt-3"
              placeholder={t("Auth.Password")}
              label={t("Auth.Password")}
              alias="password"
              name="password"
              type="password"
            />

            <Divider className="mt-3 mb-4" />
            {/* Submit */}
            <Button
              type="submit"
              text={t("Auth.Submit")}
              variant="warning"
              block
            />
          </Form>
        </Formik>
      </Card>
    </Flex>
  )
}

export default LoginPage