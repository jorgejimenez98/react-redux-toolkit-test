import { JSX } from "react"

import { useTranslation } from "react-i18next"

const HomePage = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>
        {t("Home.Title")}
      </h1>
    </div>
  )
}

export default HomePage