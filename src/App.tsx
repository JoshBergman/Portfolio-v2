import React from 'react';
import './App.css';
import Landing from './Components/Sections/Landing';
import Projects from './Components/Sections/Project';
import Skills from './Components/Sections/Skills';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
