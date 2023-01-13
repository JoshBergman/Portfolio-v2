import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Sections/Landing';
import Skills from './Components/Sections/Skills';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <Skills />
    </React.Fragment>
  );
}

export default App;