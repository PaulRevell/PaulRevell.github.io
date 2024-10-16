// src/App.js
import React from 'react';
import './App.css';

// Components

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      {/* <Highlights /> */}
      <Contact />
    </div>
  );
}

export default App;
