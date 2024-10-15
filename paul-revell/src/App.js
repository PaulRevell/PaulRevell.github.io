// src/App.js
import React from 'react';
import './App.css';

// Components

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
