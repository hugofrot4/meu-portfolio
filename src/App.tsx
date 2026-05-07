import "./App.css";
import { ThemeProvider } from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <h1>Portfolio</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
