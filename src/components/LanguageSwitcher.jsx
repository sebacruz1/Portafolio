import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export const LanguageToggle = ({ className = "" }) => {
    const { t } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved) {
            i18n.changeLanguage(saved);
            setLang(saved);
        }
    }, []);

    const toggleLang = () => {
        const newLang = lang === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
        setLang(newLang);
    };

    return (
        <button
            onClick={toggleLang}
            title={t("lang.switch")}
            className={cn(
                "rounded-full transition-colors duration-300 focus:outline-none hover:bg-primary/10",
                className,
            )}
        >
            <span className="text-2xl">{lang === "en" ? "🇪🇸" : "🇺🇸"}</span>
            <span className="sr-only">{t("lang.switch")}</span>
        </button>
    );
};
