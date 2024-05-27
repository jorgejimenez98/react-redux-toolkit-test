import React from "react"

import { useTranslation } from "react-i18next"

import { Flex } from "../"

import { Logo } from "@/components/common"

const PublicHeader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header>
      <Flex align="center" justify="center" className="w-100 mt-1">
        <Logo text={t("General.PublicHeader")} />
      </Flex>
    </header>
  )
}

export default PublicHeader