import { Github, Instagram, Linkedin, Mail, MapPinIcon, Send } from "lucide-react"
import React from "react"
import { cn } from "../lib/utils";
import { useState } from "react";
import { useToast } from "../hooks/use-toast"


export const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Contactame! </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
          Algo!
      </p>

      <div className="grid grid-cols-2 gap-10"> 
          <div className="space-y-8"> 
            <h3 className="text-2xl font-semibold mb-6"> Informacion de contacto </h3>

            <div className="space-y-6 justify-center"> 
              <div className="flex items-start space-x-4"> 
                <div className="p-3 rounded-full bg-primary/10"> 
                  <Mail className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div >
                  <h4 className="font-medium"> Mail</h4>
                  <a  href="mailto:sebastiancruzpomar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> sebastiancruzpomar@gmail.com</a>


              </div>
            </div>
            <div className="flex items-start space-x-4"> 
                <div className="p-3 rounded-full bg-primary/10"> 
                  <MapPinIcon className="h-6 w-6 text-primary"/>{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Ubicacion </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors"> Viña del Mar, Valparaíso, Chile</a>
              </div>
            </div>
            <div className="pt-8"> 
              <h4 className="font-medium mb-4">Conectemos!</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://github.com/sebacruz1" target="_blank">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/sebacruz1/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/sebacruzzz" target="_blank">
                  <Instagram />
                </a>



              </div>

            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
}