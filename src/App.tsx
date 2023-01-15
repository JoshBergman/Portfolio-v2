import React from 'react';
import './App.css';
import About from './Components/Sections/About';
import Landing from './Components/Sections/Landing';
import Projects from './Components/Sections/Project';
import Skills from './Components/Sections/Skills';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <Skills />
      <Projects />
      <About />
    </React.Fragment>
  );
}

export default App;
