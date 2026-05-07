import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
