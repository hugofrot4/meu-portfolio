import { createContext, useEffect, useState } from "react";

interface Themes {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<Themes>({
  theme: "light",
  toggleTheme: () => {},
});
export default ThemeContext;

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("@theme") as "light" | "dark") || "light",
  );

  const toggleTheme = () => {
    setTheme((prevTheme: "light" | "dark") =>
      prevTheme == "light" ? "dark" : "light",
    );
  };

  useEffect(() => {
    localStorage.setItem("@theme", theme);
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
