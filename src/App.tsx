import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Hero />
        <Technologies />
        <Projects />
      </ThemeProvider>
    </>
  );
}

export default App;
