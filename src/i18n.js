import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es/common.json";
import en from "./locales/en/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: es },
      en: { common: en },
    },
    fallbackLng: "es",
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

// Mantén <html lang="..."> sincronizado
const setHtmlLang = (lng) =>
  document.documentElement.setAttribute("lang", lng || "es");
setHtmlLang(i18n.resolvedLanguage);
i18n.on("languageChanged", setHtmlLang);

export default i18n;

