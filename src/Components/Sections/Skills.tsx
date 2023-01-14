import React, { useState } from 'react';

import styles from './Skills.module.css';
import DiscButton from '../SkillsUI/DiscButton';
import FrontendBlips from '../SkillsUI/FrontendBlips';
import ToolsBlips from '../SkillsUI/ToolsBlips';
import BackendBlips from '../SkillsUI/BackendBlips';

export default function Skills() {
  const [showingFrontend, setShowingFrontend] = useState(false);
  const [showingTools, setShowingTools] = useState(false);
  const [showingBackend, setShowingBackend] = useState(false);
  const [currTitle, setCurrTitle] = useState("Skills");

  const resetStates = () => {
    setShowingFrontend(false);
    setShowingTools(false);
    setShowingBackend(false);
  };

  const FrontendClickHandler = () => {
    resetStates();
    setCurrTitle("Frontend");
    setShowingFrontend(true);
  };

  const ToolsClickHandler = () => {
    resetStates();
    setCurrTitle("Tools");
    setShowingTools(true);
  };

  const BackendClickHandler = () => {
    resetStates();
    setCurrTitle("Backend");
    setShowingBackend(true);
  };

  const getContent = () => {
    if(showingFrontend){
      return <FrontendBlips />
    } else if (showingTools) {
      return <ToolsBlips />
    } else if (showingBackend) {
      return <BackendBlips />
    } else {
      return <p className={styles.instructions}>Select a part of the stack to view skills.</p>
    }
  };

  return (
    <div id="skills" className={styles.skillsContainer}>
      <div className={styles.optionsDiv}>
        <DiscButton onClick={FrontendClickHandler} />
        <DiscButton onClick={ToolsClickHandler} />
        <DiscButton onClick={BackendClickHandler} />
      </div>
      <div className={styles.rightSideContainer}>
        <h2 className={styles.skillsTitle}>{currTitle}</h2>
        <div className={styles.techDiv}>
          {getContent()}
        </div>
      </div>
    </div>
  )
}
