import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import {
    FaCode,
    FaCodeBranch,
    FaCheckSquare,
    FaFileDownload,
} from "react-icons/fa";

export const About = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("about.title1")}
                    <span className="text-primary ">{t("about.title2")}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> {t("about.name")} </h3>

                        <p className="text-muted-foreground text-justify whitespace-pre-line">
                            {t("about.description")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contacto" className="boton-especial">
                                {t("hero.contact")}
                            </a>
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10
                                    transition-colors duration-300 flex items-center justify-center"
                                >
                                    <FaFileDownload className="m-1 -ml-px" />
                                    {t("about.resume")}
                                </button>

                                {open && (
                                    <div className="absolute mt-2 w-40 text-primary hover:bg-primary/10 transition-colors duration-300 bg-primary/15 rounded-md">
                                        <a
                                            href="/assets/Cruz_Sebastian_CV_ES.pdf"
                                            download="Cruz_Sebastian_CV.pdf"
                                            className="block px-4 py-2 hover:bg-primary/10 "
                                            onClick={() => setOpen(false)}
                                        >
                      Español
                                        </a>
                                        <a
                                            href="/assets/Cruz_Sebastian_CV_EN.pdf"
                                            download="Cruz_Sebastian_CV_EN.pdf"
                                            className="block px-4 py-2 hover:bg-primary/10 "
                                            onClick={() => setOpen(false)}
                                        >
                      English
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaCode className=" h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <div className="font-semibold text-lg">
                                        {" "}
                                        {t("about.window1Title")}
                                    </div>
                                    <p className="text-muted-foreground">
                                        {t("about.window1Desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaCodeBranch className=" h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">
                                        {" "}
                                        {t("about.window2Title")}{" "}
                                    </div>
                                    <p className="text-muted-foreground">
                                        {t("about.window2Desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaCheckSquare className=" h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">
                                        {t("about.window3Title")}
                                    </div>
                                    <p className="text-muted-foreground">
                                        {t("about.window3Desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
