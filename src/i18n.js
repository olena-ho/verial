import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector/cjs";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .use(HttpApi)
  .init({
    fallbackLng: "es",
    debug: true,
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
