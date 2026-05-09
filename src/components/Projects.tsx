import { useState } from "react";
import { Code2, ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/data";
import Reveal from "./Reveal";

type Tab = "todos" | "html-sass-js" | "react";

const tabs: { id: Tab; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "html-sass-js", label: "HTML & Sass & JS" },
  { id: "react", label: "React" },
];

const descriptions: Record<Tab, string> = {
  todos: "8 projetos · HTML & Sass & JS + React",
  "html-sass-js": "Websites desenvolvidos com HTML, Sass e JavaScript",
  react: "Projetos desenvolvidos com React",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = index % 4 === 0 || index % 4 === 3;

  return (
    <div
      className={`group relative overflow-hidden border-2 border-dark h-56 xl:h-80 ${
        featured ? "md:col-span-2 xl:col-span-2" : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent pointer-events-none" />

      <div className="absolute top-4 right-4 z-10">
        <span className="font-sans bg-primary text-dark px-2 py-1 text-xs font-bold border border-dark uppercase tracking-wider">
          {project.category === "Wordpress" ? "HTML · Sass · JS" : "React"}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="font-sans border-2 border-dark bg-background text-dark px-3 py-1 text-base xl:text-lg">
          {project.title}
        </h3>
      </div>

      <div className="absolute inset-0 bg-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center gap-5 z-20">
        <p className="text-white text-sm xl:text-base max-w-sm">
          {project.description}
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-dark border-2 border-dark font-bold hover:brightness-110 transition-all duration-200 text-sm"
            >
              <ExternalLink size={14} />
              Ver Projeto
            </a>
          )}
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-background text-dark border-2 border-dark hover:brightness-90 transition-all duration-200 text-sm"
            >
              <Code2 size={14} />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("todos");
  const [gridVisible, setGridVisible] = useState(true);

  const wordpressProjects = projects.filter((p) => p.category === "Wordpress");
  const reactProjects = projects.filter((p) => p.category === "React");

  const filtered =
    activeTab === "html-sass-js"
      ? wordpressProjects
      : activeTab === "react"
        ? reactProjects
        : projects;

  const changeTab = (tab: Tab) => {
    if (tab === activeTab) return;
    setGridVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setGridVisible(true);
    }, 200);
  };

  return (
    <section id="projects" className="border-t border-gray-100 py-19 px-4">
      <div className="xl:container xl:mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-dark text-4xl mb-5 xl:text-6xl xl:mb-6">
            Projetos<span className="text-primary">.</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => changeTab(tab.id)}
                  className={`px-5 py-2 border-2 border-dark font-sans text-sm xl:text-base transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-dark text-background"
                      : "bg-background text-dark hover:bg-dark/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="text-neutral-500 text-sm xl:text-base transition-all duration-200">
              {descriptions[activeTab]}
            </p>
          </div>
        </Reveal>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 transition-opacity duration-200 ${
            gridVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
