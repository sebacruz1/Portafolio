import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa";

export const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span
                            data-testid="hero-title"
                            className="opacity-0 animate-fade-in"
                        >
                            {" "}
                            {t("hero.title")}
                        </span>
                        <span
                            data-testid="hero-name"
                            className="text-primary opacity-0 animate-fade-in-delay-1"
                        >
                            {t("hero.name")}{" "}
                        </span>
                    </h1>
                    <p
                        data-testid="hero-subtitle"
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
                    >
                        {t("hero.subtitle")}
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                        <a
                            data-testid="hero-contact"
                            href="#contacto"
                            className="boton-especial"
                        >
                            {t("hero.contact")}
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <FaArrowDown className="h-5 text-primary" />
            </div>
        </section>
    );
};
