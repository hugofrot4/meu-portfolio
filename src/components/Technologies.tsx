import { techs } from "../data/data";

export default function Technologies() {
  return (
    <section id="techs" className="border-t border-gray-100 py-19 px-4">
      <div className="xl:container xl:mx-auto">
        <h2 className="font-serif font-bold text-dark text-4xl mb-5 xl:text-6xl xl:mb-10">
          Techs<span className="text-primary">.</span>
        </h2>
        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          {techs.map((tech) => (
            <div key={tech.title} className="text-dark flex flex-col gap-4">
              <h3 className="text-xl font-bold xl:text-2xl">{tech.title}</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 xl:gap-x-8 text-neutral-500 xl:text-xl">
                {tech.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
