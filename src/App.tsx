import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
