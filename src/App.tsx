import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Hero />
        <Technologies />
      </ThemeProvider>
    </>
  );
}

export default App;
