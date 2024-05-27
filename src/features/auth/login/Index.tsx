import { JSX } from "react"

import { Form, Formik } from "formik"
import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"
import { Button, Card, Divider } from "@/components/ui"
import { TextInput } from "@/components/ui/_fields"
import { loginFormInitialValues, loginFormSchema } from "@/lib/form-options"
import { LoginPayload } from "@/lib/interfaces"

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation()

  const handleSubmit = (values: LoginPayload) => {
    console.warn("Sbmit", values)
  }

  return (
    <Flex justify="center" align="center" className="w-100">
      <Card
        title={t("Auth.Title")}
        className="mt-5 mx-2 w-100 fade-in login-container"
      >

        {/* Form */}
        <Formik
          initialValues={loginFormInitialValues}
          validationSchema={loginFormSchema(t)}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Email */}
            <TextInput
              label="Correo electronico"
              placeholder="Email"
              alias="email"
              name="email"
              type="email"
            />

            {/* Password */}
            <TextInput
              className="mt-3"
              placeholder="Password"
              label="Password"
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