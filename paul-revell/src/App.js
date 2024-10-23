// src/App.js
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Highlights from './components/Highlights';

function App() {
  // State to manage light/dark mode
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light';
  });

  // Function to toggle the theme
  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  // Effect to set the theme in the body and local storage
  useLayoutEffect (() => {
    document.body.setAttribute('data-theme', isLightMode ? 'light' : 'dark');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <div className="App">
      <Navbar isLightMode={isLightMode} toggleMode={toggleMode} />
      <About />
      <Projects />
      <Highlights />
      <Contact />
    </div>
  );
}

export default App;
