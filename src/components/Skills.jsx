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
  FaLinux,
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
} from "react-icons/si";

const ICONS = {
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
  TypeScript: <SiTypescript className="text-blue-500" />,
  Git: <FaGit className="text-orange-500" />,
  "CI/CD (GitHub Actions)": <FaGithub />,
  Linux: <FcLinux className="text-yellow-500" />,
  Docker: <SiDocker className="text-blue-400" />,
  Vercel: <TbBrandVercel />,
  C: <SiC className="text-blue-400 " />,
  Bash: <SiGnubash />,
  Java: <FaJava />,
};

const RAW_SKILLS = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },

  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  { name: "Python", level: 80, category: "lenguajes" },
  { name: "JavaScript", level: 70, category: "lenguajes" },
  { name: "Java", level: 60, category: "lenguajes" },
  { name: "C", level: 70, category: "lenguajes" },
  { name: "Bash", level: 60, category: "lenguajes" },
  { name: "TypeScript", level: 60, category: "lenguajes" },

  { name: "Vercel", level: 70, category: "herramientas" },
  { name: "Git", level: 80, category: "herramientas" },
  { name: "Linux", level: 70, category: "herramientas" },

  { name: "Docker", level: 40, category: "aprendiendo" },
  { name: "CI/CD (GitHub Actions)", level: 35, category: "aprendiendo" },
];

const CATEGORY_LABELS = {
  todos: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  lenguajes: "Lenguajes",
  herramientas: "Herramientas",
  aprendiendo: "Aprendiendo",
};

function levelLabel(level) {
  if (level >= 80)
    return { label: "Principal", cls: "bg-emerald-100 text-emerald-700" };
  if (level >= 60)
    return { label: "Intermedio", cls: "bg-amber-100 text-amber-700" };
  return { label: "Aprendiendo", cls: "bg-indigo-100 text-indigo-700" };
}

export const Skills = () => {
  const [activeCat, setActiveCat] = useState("todos");

  const filteredAndSorted = useMemo(() => {
    return RAW_SKILLS.filter((s) =>
      activeCat === "todos" ? true : s.category === activeCat,
    ).sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));
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

        {visibleCategories.map((cat) => (
          <CategoryBlock
            key={cat}
            title={CATEGORY_LABELS[cat] || cat}
            items={groupedByCategory[cat] || []}
          />
        ))}
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
