import React, { useState } from "react"

import { useTranslation } from "react-i18next"

import { Dropdown } from "@/components/ui"

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const languages = [
    { text: "English", key: "en" },
    { text: "Español", key: "es" }
  ]

  const handleLanguageChange = (language: string) => {
    // Todo: Change user language on backend

    setCurrentLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <Dropdown text={currentLanguage === "en" ? "English" : "Español"}>
      {languages.map(language => (
        <button
          key={language.key}
          className="dropdown-item"
          onClick={() => handleLanguageChange(language.key)}
        >
          {language.text}
        </button>
      ))}
    </Dropdown>
  )
}

export default LanguageSelector
