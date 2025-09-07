import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageSwitcher";

import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();
    const navItems = [
        { name: t("nav.home"), href: "#hero" },
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.skills"), href: "#skills" },
        // {name: "Proyectos", href: "#projects"},
        { name: t("nav.contact"), href: "#contacto" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Navegación principal"
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5",
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">seba-cruz</span>
                        <span>.dev</span>
                    </span>
                </a>

                {/* pc */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <LanguageToggle />
                </div>

                {/* celular */}
                <button
                    aria-label={isMenuOpen ? t("nav.menu-cerrar") : t("nav.menu-abrir")}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                >
                    {isMenuOpen ? (
                        <IoCloseCircleOutline size={24} />
                    ) : (
                        <IoMenu size={24} />
                    )}
                </button>

                <div
                    id="mobile-menu"
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none",
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeToggle className="p-12" />
                    </div>
                </div>
            </div>
        </nav>
    );
};
