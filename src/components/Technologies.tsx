import { techs } from "../data/data";
import Reveal from "./Reveal";

export default function Technologies() {
  return (
    <section id="techs" className="border-t border-gray-100 py-19 px-4">
      <div className="xl:container xl:mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-dark text-4xl mb-5 xl:text-6xl xl:mb-10">
            Techs<span className="text-primary">.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          {techs.map((tech, i) => (
            <Reveal key={tech.title} delay={i * 100}>
              <div className="text-dark flex flex-col gap-4">
                <h3 className="text-xl font-bold xl:text-2xl">{tech.title}</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 xl:gap-x-8 text-neutral-500 xl:text-xl">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="group/item flex items-center gap-1.5 transition-colors duration-200 hover:text-dark cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
