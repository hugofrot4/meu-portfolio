export interface Project {
  image: string;
  title: string;
  description: string;
  productionUrl?: string;
  repositoryUrl?: string;
  category: "Wordpress" | "React";
}

export interface Tech {
  title: string;
  items: string[];
}

export const techs: Tech[] = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Sass",
      "Javascript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
    ],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Figma", "Vite", "Vercel", "VSCode", "Linux"],
  },
  {
    title: "CMS",
    items: ["WordPress"],
  },
  {
    title: "Soft Skills",
    items: [
      "Entrega de projetos para clientes",
      "Adaptabilidade",
      "Aprendizado contínuo",
      "Comunicação Efetiva",
      "Background em Design",
    ],
  },
];

import imageHumanize from "../assets/humanize.png";
import imageIguatemi from "../assets/iguatemi.png";
import imageDuopass from "../assets/duopass.png";
import imageBsurbanismo from "../assets/bsurbanismo.png";
import imageDogs from "../assets/dogs.jpg";
import imageMytasks from "../assets/mytasks.png";
import imageChamados from "../assets/chamados.png";
import imageMovieslib from "../assets/movieslib.png";

export const projects: Project[] = [
  {
    image: imageHumanize,
    title: "Instituto Humanize",
    description:
      "Projeto de website de instituição feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper",
    productionUrl: "https://www.ihumanize.org/",
    category: "Wordpress",
  },
  {
    image: imageIguatemi,
    title: "Iguatemi",
    description:
      "Projeto de website para shopping center feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper",
    productionUrl: "https://www.iguatemibosque.com.br/",
    category: "Wordpress",
  },
  {
    image: imageDuopass,
    title: "Duopass",
    description:
      "Projeto de website com foco no turismo feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper",
    productionUrl: "https://duopass.com.br/",
    category: "Wordpress",
  },
  {
    image: imageBsurbanismo,
    title: "BS Urbanismo",
    description:
      "Projeto de website para empresa de arquitetura e urbanismo feito em Wordpress usando HTML, SASS, Javascript, Jquery e Swiper",
    productionUrl: "https://www.bsparurbanismo.com.br/",
    category: "Wordpress",
  },
  {
    image: imageDogs,
    title: "Dogs",
    description:
      "Projeto de rede social fictícia para cachorros realizado durante o curso de React da Origamid, usando React Hooks, Consumo de API com o Fetch e CSS modules",
    productionUrl: "https://hugocodes-dogs.netlify.app/",
    repositoryUrl: "https://github.com/hugofrot4/dogs",
    category: "React",
  },
  {
    image: imageMytasks,
    title: "My Tasks",
    description:
      "Projeto de um gerenciador de tarefas com funções de edição, remoção e clonclusão das mesmas feito em React (Layout desenhado por mim no Figma), usando React Hooks, Local Storage e SASS",
    productionUrl: "https://hugocodes-mytasks.netlify.app/",
    repositoryUrl: "https://github.com/hugofrot4/my-tasks",
    category: "React",
  },
  {
    image: imageChamados,
    title: "Chamados",
    description:
      "Projeto de um dashboard de chamados com login, paginação, adição de clientes e tickets feito em React, React Hooks, Firebase, React Router Dom e SASS",
    productionUrl: "https://hugocodes-chamados.netlify.app/",
    repositoryUrl: "https://github.com/HugoCodesBr/chamados",
    category: "React",
  },
  {
    image: imageMovieslib,
    title: "MoviesLib",
    description:
      "Projeto de uma catálogo de filmes com funções de busca e página internas feito em React consumindo a API do TMDB, usando React Hooks, React Router Dom e Fetch",
    productionUrl: "https://hugocodes-movieslib.netlify.app/",
    repositoryUrl: "https://github.com/HugoCodesBr/movies_lib",
    category: "React",
  },
];
