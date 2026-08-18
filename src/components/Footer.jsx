import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="#hero"
          className="text-lg font-bold text-primary flex items-center"
        >
          <span className="text-foreground">seba-cruz</span>
          <span>.com</span>
        </a>

        <p className="text-sm text-muted-foreground text-center">
          © {year} Sebastián Cruz. {t("footer.rights")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sebacruz1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/sebacruz1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.instagram.com/sebacruzzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
