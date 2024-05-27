import React from "react"

import { useTranslation } from "react-i18next"

import Flex from "../flex/Flex"

import { Text } from "@/components/ui"

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-light py-4">
      <Flex justify="center" align="center">
        <Text type="muted">
          {t("General.Footer", { currentYear })}
        </Text>
      </Flex>
    </footer>
  )
}

export default Footer