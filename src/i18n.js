import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import csTranslation from './locales/cs.json';

i18n
  .use(initReactI18next) // Initializes react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      cs: { translation: csTranslation },
    },
    lng: 'cs', // Set Czech as the default language
    fallbackLng: 'cs', // Czech is also the fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
