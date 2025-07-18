import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Background from "./components/Background";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Background isDarkMode={isDarkMode} />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
};

export default App;
