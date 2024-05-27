import { JSX } from "react"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"
import { Button, Card } from "@/components/ui"

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation()

  const handleSubmit = () => {
    console.warn("Sbmit")
  }

  return (
    <Flex justify="center" align="center" className="w-100">
      <Card
        title={t("Auth.Title")}
        className="mt-5 mx-2 w-100 fade-in login-container"
      >
        {/* Submit */}
        <Button
          type="submit"
          text={t("Auth.Submit")}
          variant="warning"
          onClick={handleSubmit}
          block
        />
      </Card>
    </Flex>
  )
}

export default LoginPage