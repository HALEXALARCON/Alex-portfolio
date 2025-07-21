const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white text-black shadow-md"
    >
      {isDarkMode ? "🌘" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
