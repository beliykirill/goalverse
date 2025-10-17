import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ru',
  compatibilityJSON: 'v3',
  defaultNS: 'teams',
  ns: ['teams'],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
