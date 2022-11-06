import React, { useState } from 'react';
import Home from './components/Home';


function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark-mode')
  const toggleTheme = () => {
    theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode")
  }
  localStorage.setItem('theme', theme)

  return (
    <Home theme={theme} toggleTheme={toggleTheme} />
  );
}

export default App;
