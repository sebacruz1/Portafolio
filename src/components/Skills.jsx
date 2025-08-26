import { useMemo, useState } from "react";

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
  { name: "TypeScript", level:60, category: "lenguajes" },

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
  if (level >= 80) return { label: "Principal", cls: "bg-emerald-100 text-emerald-700" };
  if (level >= 60) return { label: "Intermedio", cls: "bg-amber-100 text-amber-700" };
  return { label: "Aprendiendo", cls: "bg-indigo-100 text-indigo-700" };
}

export const Skills = () => {
  const [activeCat, setActiveCat] = useState("todos");

  const filteredAndSorted = useMemo(() => {
    return RAW_SKILLS
      .filter((s) => (activeCat === "todos" ? true : s.category === activeCat))
      .sort((a, b) => b.level - a.level || a.name.localeCompare(b.name));
  }, [activeCat]);

  const groupedByCategory = useMemo(() => {
    return filteredAndSorted.reduce((acc, s) => {
      (acc[s.category] = acc[s.category] || []).push(s);
      return acc;
    }, {});
  }, [filteredAndSorted]);

  const visibleCategories = activeCat === "todos" ? Object.keys(groupedByCategory) : [activeCat];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Mis <span className="text-primary">Habilidades</span>
        </h2>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
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
            ) : null
          ))}
        </div>

        {visibleCategories.map((cat) => (
          <CategoryBlock key={cat} title={CATEGORY_LABELS[cat] || cat} items={groupedByCategory[cat] || []} />
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
        {items.map((s) => {
          const ll = levelLabel(s.level);
          return (
            <div
              key={s.name}
              className="bg-card p-5 rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{s.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${ll.cls}`}>{ll.label}</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-muted-foreground">Nivel</span>
                <span className="tabular-nums">{s.level}%</span>
              </div>
              <div
                className="h-2 w-full bg-muted rounded-full overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={s.level}
              >
                <div className="h-full bg-primary" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

