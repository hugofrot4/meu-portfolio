import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/theme";
import { Lightbulb, LightbulbOff, Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Sobre mim",
    href: "#about",
  },
  {
    name: "Tecnologias",
    href: "#techs",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`bg-background text-dark p-4 fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="xl:container xl:mx-auto xl:flex xl:justify-between xl:items-center">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold py-1 px-2 border-2 border-dark select-none">
              Hugo Frota<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6  xl:hidden">
            <button onClick={toggleTheme} className="">
              {theme === "light" ? <LightbulbOff /> : <Lightbulb />}
            </button>
            <button onClick={toggleMenu}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <div
          className={`${menuOpen ? "" : "translate-x-full"} bg-background transition duration-200 w-full absolute top-19 left-0 border-t-2 border-dark xl:translate-0 xl:static xl:border-none xl:w-max xl:flex xl:items-center xl:bg-transparent`}
        >
          <ul className="xl:flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  className="w-full flex justify-center p-2 border-b border-gray-100 xl:border-none xl:p-0 xl:ml-4 xl:w-max xl:relative xl:after:content-[''] xl:after:h-0.5 xl:after:bg-primary xl:after:absolute xl:after:bottom-0 xl:after:right-0 xl:after:w-0 hover:xl:after:w-full xl:after:transition-all xl:after:duration-300 xl:after:ease-in-out"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleTheme} className="hidden xl:block xl:ml-4">
            {theme === "light" ? <LightbulbOff /> : <Lightbulb />}
          </button>
        </div>
      </div>
    </header>
  );
}
