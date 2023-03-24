import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./public/locales/pl/pl.json";
import ua from "./public/locales/ua/ua.json";

const resources = {
  pl: {
    translation: pl,
  },
  ua: {
    translation: ua,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: "pl",
    fallbackLng: "pl",
    supportedLngs: ["pl", "ua"],
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
