import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { projects } from "../data/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-100 py-19 px-4">
      <div className="xl:container xl:mx-auto">
        <h2 className="font-serif font-bold text-dark text-4xl mb-5 xl:text-6xl xl:mb-10">
          Projetos<span className="text-primary">.</span>
        </h2>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">
              Projetos WordPress<span className="text-primary">:</span>
            </h3>
            <div className="border-2 border-dark">
              <Swiper
                loop={true}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {projects.map(
                  (project) =>
                    project.category === "Wordpress" && (
                      <SwiperSlide key={project.title}>
                        <div className="relative h-90 after:content-[''] after:absolute after:bg-linear-to-b after:from-transparent after:to-black after:top-[15%] after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full xl:h-155">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-4 bottom-4 right-4 left-4 z-10">
                            <div className="flex flex-col justify-between h-full">
                              <h3 className="font-sans border-2 border-dark bg-background w-max px-4 py-2 text-xl text-dark">
                                {project.title}
                              </h3>
                              <div className="mb-10 text-white flex flex-col gap-4">
                                <p className="xl:text-2xl xl:max-w-170">
                                  {project.description}
                                </p>
                                <div className="flex gap-2">
                                  {project.productionUrl && (
                                    <a
                                      href={project.productionUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 bg-primary text-dark border-2 hover:brightness-110 transition-all duration-300"
                                    >
                                      Ver Projeto
                                    </a>
                                  )}
                                  {project.repositoryUrl && (
                                    <a
                                      href={project.repositoryUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 bg-background text-dark border-2 hover:brightness-90 transition-all duration-300"
                                    >
                                      Ver Código
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ),
                )}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl mb-1">
              Projetos React<span className="text-primary">:</span>
            </h3>
            <div className="border-2 border-dark">
              <Swiper
                loop={true}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {projects.map(
                  (project) =>
                    project.category === "React" && (
                      <SwiperSlide key={project.title}>
                        <div className="relative h-90 after:content-[''] after:absolute after:bg-linear-to-b after:from-transparent after:to-black after:top-[15%] after:bottom-0 after:left-0 after:right-0 after:w-full after:h-full xl:h-155">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
                          />
                          <div className="absolute top-4 bottom-4 right-4 left-4 z-10">
                            <div className="flex flex-col justify-between h-full">
                              <h3 className="font-sans border-2 border-dark bg-background w-max px-4 py-2 text-xl text-dark">
                                {project.title}
                              </h3>
                              <div className="mb-10 text-white flex flex-col gap-4">
                                <p className="xl:text-2xl xl:max-w-170">
                                  {project.description}
                                </p>
                                <div className="flex gap-2">
                                  {project.productionUrl && (
                                    <a
                                      href={project.productionUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 bg-primary text-dark border-2 hover:brightness-110 transition-all duration-300"
                                    >
                                      Ver Projeto
                                    </a>
                                  )}
                                  {project.repositoryUrl && (
                                    <a
                                      href={project.repositoryUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 bg-background text-dark border-2 hover:brightness-90 transition-all duration-300"
                                    >
                                      Ver Código
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ),
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
