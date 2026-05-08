import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
