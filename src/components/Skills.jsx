import { useMemo, useState } from "react";
import { FcLinux } from "react-icons/fc";
import { TbBrandVercel } from "react-icons/tb";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGit,
    FaJava,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMysql,
    SiDocker,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiC,
    SiGnubash,
    SiZsh,
    SiVim,
    SiTmux,
} from "react-icons/si";

const ICONS = {
    // Herramientas
    Vercel: <TbBrandVercel />,
    Git: <FaGit className="text-orange-500" />,
    Linux: <FcLinux className="text-yellow-500" />,
    zsh: <SiZsh />,
    Vim: <SiVim />,
    Tmux: <SiTmux />,

    // Frontend
    "HTML/CSS": (
        <>
            <FaHtml5 className="text-orange-600" />{" "}
            <FaCss3Alt className="text-blue-600" />
        </>
    ),
    React: <FaReact className="text-sky-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,

    // Backend
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Express.js": <SiExpress />,
    MySQL: <SiMysql className="text-blue-500" />,

    // Lenguajes
    Python: <FaPython className="text-yellow-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Java: <FaJava />,
    C: <SiC className="text-blue-400" />,
    Bash: <SiGnubash />,
    TypeScript: <SiTypescript className="text-blue-500" />,

    // Aprendiendo
    Docker: <SiDocker className="text-blue-400" />,
    "CI/CD (GitHub Actions)": <FaGithub />,
};

const RAW_SKILLS = [
    { name: "Vercel", category: "herramientas" },
    { name: "Git", category: "herramientas" },
    { name: "Linux", category: "herramientas" },
    { name: "zsh", category: "herramientas" },
    { name: "Vim", category: "herramientas" },
    { name: "Tmux", category: "herramientas" },

    { name: "HTML/CSS", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },

    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "MySQL", category: "backend" },

    { name: "Python", category: "lenguajes" },
    { name: "JavaScript", category: "lenguajes" },
    { name: "Java", category: "lenguajes" },
    { name: "C", category: "lenguajes" },
    { name: "Bash", category: "lenguajes" },
    { name: "TypeScript", category: "lenguajes" },

    { name: "Docker", category: "aprendiendo" },
    { name: "CI/CD (GitHub Actions)", category: "aprendiendo" },
];

const CATEGORY_LABELS = {
    todos: "Todos",
    frontend: "Frontend",
    backend: "Backend",
    lenguajes: "Lenguajes",
    herramientas: "Herramientas",
    aprendiendo: "Aprendiendo",
};

const CATEGORY_ORDER = [
    "herramientas",
    "frontend",
    "backend",
    "lenguajes",
    "aprendiendo",
];

export const Skills = () => {
    const [activeCat, setActiveCat] = useState("todos");

    const filteredAndSorted = useMemo(() => {
        return RAW_SKILLS.filter((s) =>
            activeCat === "todos" ? true : s.category === activeCat,
        );
    }, [activeCat]);

    const groupedByCategory = useMemo(() => {
        return filteredAndSorted.reduce((acc, s) => {
            (acc[s.category] = acc[s.category] || []).push(s);
            return acc;
        }, {});
    }, [filteredAndSorted]);

    const visibleCategories =
    activeCat === "todos" ? Object.keys(groupedByCategory) : [activeCat];

    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Mis <span className="text-primary">Habilidades</span>
                </h2>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {Object.entries(CATEGORY_LABELS).map(([key, label]) =>
                        key === "todos" || RAW_SKILLS.some((s) => s.category === key) ? (
                            <button
                                key={key}
                                onClick={() => setActiveCat(key)}
                                className={`px-4 py-2 rounded-full text-sm border transition ${
                                    activeCat === key
                                        ? "bg-primary text-white border-primary"
                                        : "bg-card text-foreground/80 hover:bg-muted border-border"
                                }`}
                            >
                                {label}
                            </button>
                        ) : null,
                    )}
                </div>

                {CATEGORY_ORDER.filter((cat) => visibleCategories.includes(cat)).map(
                    (cat) => (
                        <CategoryBlock
                            key={cat}
                            title={CATEGORY_LABELS[cat] || cat}
                            items={groupedByCategory[cat] || []}
                        />
                    ),
                )}
            </div>
        </section>
    );
};
function CategoryBlock({ title, items }) {
    if (!items?.length) return null;

    return (
        <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                    <div
                        key={s.name}
                        className="bg-card p-5 rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition flex items-center justify-center"
                    >
                        <div className="flex items-center gap-2">
                            {ICONS[s.name] && (
                                <span className="text-2xl">{ICONS[s.name]}</span>
                            )}
                            <span className="font-bold">{s.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
