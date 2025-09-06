import { useTranslation } from "react-i18next";
import { CheckSquare, Code, GitBranch, Download } from "lucide-react";

export const About = () => {
  const { t } = useTranslation();
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
              {
                <a
                  href="/public/assets/Cruz_Sebastian_CV.pdf"
                  download="Cruz-Sebastian-CV.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transitio-colors duration-300 flex p-1 justify-center"
                >
                  <Download />
                  {t("about.resume")}
                </a>
              }{" "}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className=" h-6 w-6 text-primary" />
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
                  <GitBranch className=" h-6 w-6 text-primary" />
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
                  <CheckSquare className=" h-6 w-6 text-primary" />
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
