import React, { useEffect } from "react";

import "./App.css";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import Landing from "./Components/Sections/Landing";
import Projects from "./Components/Sections/Project";
import Skills from "./Components/Sections/Skills";
import CopyRight from "./Components/UI/CopyRight";

function App() {
  //just a lil data mining
  useEffect(() => {
    try {
      fetch(
        "https://too-simple-analytics.herokuapp.com/std/view/JoshPortfolio"
      );
    } catch (err) {}
  }, []);
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
