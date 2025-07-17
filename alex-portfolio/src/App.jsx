import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Background from "./components/Background";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main
      className={`relative z-10 bg-transparent ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <Background isDarkMode={isDarkMode} />
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-white text-black px-4 py-2 rounded shadow-lg hover:bg-gray-100"
      >
        Cambiar a modo {isDarkMode ? "claro ☀️" : "oscuro 🌙"}
      </button>
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
