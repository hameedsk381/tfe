import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';
import taTranslation from './locales/ta/translation.json';
import teTranslation from './locales/te/translation.json';
import knTranslation from './locales/kn/translation.json';
import bnTranslation from './locales/bn/translation.json';
import mlTranslation from './locales/ml/translation.json';
import maTranslation from './locales/ma/translation.json';
// i18n configuration
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      ta: {
        translation: taTranslation,
      }, te: {
        translation: teTranslation,
      },kn: {
        translation: knTranslation,
      },bn: {
        translation: bnTranslation,
      },
      ml: {
        translation: mlTranslation,
      },
      ma: {
        translation: maTranslation,
      },
      
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
