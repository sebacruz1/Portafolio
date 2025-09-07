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
        <section id="contacto" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t("contact.title")}
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto whitespace-pre-line">
                    {t("contact.subtitle")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t("contact.information-title")}
                        </h3>
                        {/* Email */}
                        <div className="space-y-1">
                            <h4 className="text-primary font-bold mb-0">Email</h4>
                            <div className="flex items-center space-x-3 ml-15 mb-2">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <IoIosMail className="h-6 w-6 text-primary" />
                                </div>
                                <a
                                    href="mailto:sebastiancruzpomar@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                  sebastiancruzpomar@gmail.com
                                </a>
                            </div>

                            {/* Ubicacion */}

                            <h4 className="text-primary font-bold mb-0">
                                {" "}
                                {t("contact.ubicacion")}
                            </h4>
                            <div className="flex items-center space-x-15 ml-15">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaMapPin className="h-6 w-6 text-primary" />
                                </div>
                                <p className="text-muted-foreground">Valparaíso, Chile.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="text-xl font-semibold mb-6">
                                {t("contact.rrss")}
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/sebacruz1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin className="size-[30px] hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://github.com/sebacruz1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="size-[30px] hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://www.instagram.com/sebacruzzz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="size-[30px] hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t("contact.forms.title")}
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
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
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
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
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
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
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                                    placeholder={t("contact.forms.msg-placeholder")}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid || state.submiting}
                                className={cn(
                                    "boton-especial w-full flex items-center justify-center gap-2",
                                    "disabled:opacity-50 disabled:cursor-not-allowed",
                                )}
                            >
                                {state.submitting
                                    ? t("contact.forms.sending")
                                    : t("contact.forms.send")}
                                <FiSend size={16} className="relative top-[2px]" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
