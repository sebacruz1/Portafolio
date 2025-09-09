import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Nota: ya NO importamos los JSON desde src/, ahora viven en public/locales

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    // Carga los archivos desde public/locales/{{lng}}/{{ns}}.json
        backend: {
            // BASE_URL asegura que funcione si tu app vive bajo subcarpeta (ej. /portafolio/)
            loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
        },

        // Idiomas/namespaces
        supportedLngs: ["es", "en"],
        fallbackLng: "es",
        ns: ["common"],
        defaultNS: "common",

        // Render seguro en React
        interpolation: { escapeValue: false },

        // Detección de idioma (puedes ajustar caches según tu preferencia)
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"], // si en tests te molesta, puedes dejar []
        },

    // Si alguna vez quieres que NO se quede en Suspense cuando falta el JSON:
    // react: { useSuspense: false  },
    });

// Mantén <html lang="..."> sincronizado
const setHtmlLang = (lng) =>
    document.documentElement.setAttribute("lang", lng || "es");
setHtmlLang(i18n.resolvedLanguage);
i18n.on("languageChanged", setHtmlLang);

export default i18n;
