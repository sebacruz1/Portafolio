import { useMemo, useState } from "react";
import { FcLinux } from "react-icons/fc";
import { TbBrandVercel } from "react-icons/tb";
import { useTranslation } from "react-i18next";

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
    Vercel: <TbBrandVercel />,
    Git: <FaGit className="text-orange-500" />,
    Linux: <FcLinux className="text-yellow-500" />,
    zsh: <SiZsh />,
    Vim: <SiVim />,
    Tmux: <SiTmux />,

    "HTML/CSS": (
        <>
            <FaHtml5 className="text-orange-600" />{" "}
            <FaCss3Alt className="text-blue-600" />
        </>
    ),
    React: <FaReact className="text-sky-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,

    "Node.js": <FaNodeJs className="text-green-600" />,
    "Express.js": <SiExpress />,
    MySQL: <SiMysql className="text-blue-500" />,

    Python: <FaPython className="text-yellow-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    Java: <FaJava />,
    C: <SiC className="text-blue-400" />,
    Bash: <SiGnubash />,
    TypeScript: <SiTypescript className="text-blue-500" />,

    Docker: <SiDocker className="text-blue-400" />,
    "CI/CD (GitHub Actions)": <FaGithub />,
};

const RAW_SKILLS = [
    { name: "Vercel", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "Linux", category: "tools" },
    { name: "zsh", category: "tools" },
    { name: "Vim", category: "tools" },
    { name: "Tmux", category: "tools" },

    { name: "HTML/CSS", category: "front" },
    { name: "React", category: "front" },
    { name: "Tailwind CSS", category: "front" },

    { name: "Node.js", category: "back" },
    { name: "Express.js", category: "back" },
    { name: "MySQL", category: "back" },

    { name: "Python", category: "leng" },
    { name: "JavaScript", category: "leng" },
    { name: "Java", category: "leng" },
    { name: "C", category: "leng" },
    { name: "Bash", category: "leng" },
    { name: "TypeScript", category: "leng" },

    { name: "Docker", category: "learn" },
    { name: "CI/CD (GitHub Actions)", category: "learn" },
];

const CATEGORY_LABELS = ["todos", "front", "back", "leng", "tools", "learn"];

const CATEGORY_ORDER = ["tools", "front", "back", "leng", "learn"];

export const Skills = () => {
    const [activeCat, setActiveCat] = useState("todos");
    const { t } = useTranslation();

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
                    {t("skills.title1")}{" "}
                    <span className="text-primary">{t("skills.title2")}</span>
                </h2>

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
                            title={t(`skills.subtitle.${cat}`)}
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
                        className="bg-card p-5 rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition flex items-center justify-center card-hover-skills"
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
