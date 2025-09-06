import { FaGithub, FaInstagram, FaLinkedin, FaMapPin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useForm } from "@formspree/react";

export const Contacto = () => {
    const { toast } = useToast();
    const [state, handleSubmit] = useForm("mblkdnoq");

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
                title: "Mensaje enviado!",
                description: "Gracias por contactarme, te responderé a la brevedad.",
            });
        }
    }, [state.succeeded, toast]);

    return (
        <section id="contacto" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contáctame!
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Quieres contactarme para algún trabajo o proyecto?
                    <br />
          ¡Espero tu mensaje!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
              Información de contacto
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <IoIosMail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-primary font-bold">Email</h4>
                                    <a
                                        href="mailto:sebastiancruzpomar@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                    sebastiancruzpomar@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaMapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-primary font-bold">
                    Ubicación
                                    </h4>
                                    <p className="text-muted-foreground">
                    Viña del Mar, Valparaíso, Chile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Redes Sociales</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/sebacruz1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://github.com/sebacruz1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://www.instagram.com/sebacruzzz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
              ¡Envíame un mensaje!
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                  Tu nombre
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
                  Tu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                                    placeholder="hola@seba-cruz.dev"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                  Tu mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hola, me gustaría contactarte."
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
                                {state.submitting ? "Enviando..." : "Enviar mensaje"}
                                <FiSend size={16} className="relative top-[2px]" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
