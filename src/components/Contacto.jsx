import { FaGithub, FaInstagram, FaLinkedin, FaMapPin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useForm } from "@formspree/react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
    const { toast } = useToast();
    const [state, handleSubmit] = useForm("mblkdnoq");
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (state.succeeded) {
            toast({
                title: t("contact.toast.title"),
                description: t("contact.toast.desc"),
            });
        }
    }, [state.succeeded, toast]);
    return (
        <section
            id="contacto"
            className="relative bg-secondary/30 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-28"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-3 sm:mb-4 text-center">
                    {t("contact.title")}
                </h2>

                <p className="text-center text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto whitespace-pre-line text-base sm:text-lg md:text-xl">
                    {t("contact.subtitle")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16">
                    {/* Columna formulario */}
                    <div className="bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xs">
                        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-5 sm:mb-6">
                            {t("contact.forms.title")}
                        </h3>

                        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {t("contact.forms.name")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Sebastián Cruz..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {t("contact.forms.email")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder={t("contact.forms.email-placeholder")}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {t("contact.forms.msg")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 min-h-[140px] sm:min-h-[160px] rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                                    placeholder={t("contact.forms.msg-placeholder")}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid || state.submitting}
                                className={cn(
                                    "boton-especial w-full flex items-center justify-center gap-2",
                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                )}
                            >
                                {state.submitting
                                    ? t("contact.forms.sending")
                                    : t("contact.forms.send")}
                                <FiSend className="relative top-[1px] size-4 sm:size-5" />
                            </button>
                        </form>
                    </div>

                    {/* Columna info */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-0">
                            {t("contact.information-title")}
                        </h3>

                        <div className="space-y-4">
                            {/* Email */}
                            <div>
                                <div className="flex items-center gap-4 sm:gap-5 justify-start">
                                    <div className="p-2.5 sm:p-3 rounded-full bg-primary/10">
                                        <IoIosMail className="size-5 sm:size-6 text-primary" />
                                    </div>
                                    <a
                                        href="mailto:sebastiancruzpomar@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                                    >
                    sebastiancruzpomar@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div>
                                <div className="flex items-center gap-4 sm:gap-5 justify-start">
                                    <div className="p-2.5 sm:p-3 rounded-full bg-primary/10">
                                        <FaMapPin className="size-5 sm:size-6 text-primary" />
                                    </div>
                                    <p className="text-muted-foreground">Valparaíso, Chile.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 sm:pt-8">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                                {t("contact.rrss")}
                            </h4>

                            <div className="flex items-center justify-center gap-5 sm:gap-6">
                                <a
                                    href="https://www.linkedin.com/in/sebacruz1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 sm:p-2 hover:text-primary transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="size-[26px] sm:size-[30px]" />
                                </a>

                                <a
                                    href="https://github.com/sebacruz1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 sm:p-2 hover:text-primary transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="size-[26px] sm:size-[30px]" />
                                </a>

                                <a
                                    href="https://www.instagram.com/sebacruzzz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 sm:p-2 hover:text-primary transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="size-[26px] sm:size-[30px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
