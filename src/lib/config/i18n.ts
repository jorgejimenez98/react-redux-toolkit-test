/* eslint-disable import/no-named-as-default-member */
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Get all texts
import translationEN from "@/assets/locales/en/common.json"
import translationES from "@/assets/locales/es/common.json"

const DEFAULT_LANGUAGE = "en"

// Settings for i18n
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES }
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
