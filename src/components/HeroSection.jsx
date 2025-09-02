import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola Soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Seba{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Software Developer
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#contacto" className="boton-especial">
              Contactáme{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        {/*}			Scroll {*/}
        <ArrowDown className="h-5 text-primary" />
      </div>
    </section>
  );
};
