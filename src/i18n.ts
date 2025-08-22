import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../public/locales/en'
import vi from '../public/locales/vi'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
      lookupCookie: 'lang'
    },
    resources: {
      en: en,
      vi: vi
    },
    debug: true
  })

export default i18n
