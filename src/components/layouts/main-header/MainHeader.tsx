import React from "react"

import { useTranslation } from "react-i18next"

import { Flex } from "../"

import { Logo } from "@/components/common"

const MainHeader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header>
      <Flex align="center" justify="between" className="w-100 mt-1">
        <Logo text={t("General.MainHeader")} />
      </Flex>
    </header>
  )
}

export default MainHeader