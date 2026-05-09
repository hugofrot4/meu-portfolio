import { ArrowUpRight, Mail } from "lucide-react";
import { AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { contacts } from "../data/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-100 py-19 px-4">
      <div className="xl:container xl:mx-auto">
        <Reveal>
          <h2 className="font-serif font-bold text-dark text-4xl mb-5 xl:text-6xl xl:mb-10">
            Contato<span className="text-primary">.</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="flex justify-center mt-10 xl:mt-20">
          <div className="flex items-center gap-2 py-2 px-4 w-max rounded-full shadow">
            <span className="block w-3 h-3 bg-green-400 rounded-full mb-1 animate-pulse" />
            <p className="text-dark">Disponível para novos projetos</p>
          </div>
        </Reveal>

        <Reveal delay={200} className="text-dark mt-10 text-center xl:mt-20">
          <h3 className="text-xl font-bold uppercase xl:text-3xl">
            Vamos trabalhar juntos<span className="text-primary">?</span>
          </h3>
          <p className="mt-2 xl:max-w-150 xl:text-xl xl:mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em
            contato e vamos conversar.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=herbtyh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center gap-2 w-max mx-auto bg-primary px-4 py-2 border-2 border-dark hover:brightness-110 transition-all duration-300"
          >
            Entre em contato <ArrowUpRight size={20} className="mb-0.5" />
          </a>
        </Reveal>

        <Reveal delay={350} className="mt-10 xl:mt-20">
          <div className="grid grid-cols-2 max-w-[80%] mx-auto gap-2 xl:grid-cols-4 xl:max-w-150">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center bg-background text-dark border-2 border-dark p-2 gap-2 hover:bg-primary transition-all duration-300"
              >
                {contact.title === "E-mail" && <Mail />}
                {contact.title === "LinkedIn" && (
                  <AiOutlineLinkedin size={24} />
                )}
                {contact.title === "Github" && <VscGithub size={24} />}
                {contact.title === "Whatsapp" && (
                  <AiOutlineWhatsApp size={24} />
                )}
                <p className="translate-y-0.5">{contact.title}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
