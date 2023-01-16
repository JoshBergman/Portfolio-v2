import React from 'react';
import './App.css';
import About from './Components/Sections/About';
import Contact from './Components/Sections/Contact';
import Landing from './Components/Sections/Landing';
import Projects from './Components/Sections/Project';
import Skills from './Components/Sections/Skills';
import CopyRight from './Components/UI/CopyRight';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <CopyRight />
    </React.Fragment>
  );
}

export default App;
