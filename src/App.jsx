import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Routes, Link } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark-mode"
  );
  const toggleTheme = () => {
    theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode");
  };
  localStorage.setItem("theme", theme);

  return (
    <Routes>
      <Home theme={theme} toggleTheme={toggleTheme} />
    </Routes>
  );
}

export default App;
