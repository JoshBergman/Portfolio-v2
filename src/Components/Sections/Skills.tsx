import React, { useState } from 'react';

import styles from './Skills.module.css';
import DiscButton from '../SkillsUI/DiscButton';
import FrontendBlips from '../SkillsUI/FrontendBlips';
import ToolsBlips from '../SkillsUI/ToolsBlips';
import BackendBlips from '../SkillsUI/BackendBlips';

//button icons
import { MdMonitor } from 'react-icons/md';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { AiOutlineDatabase } from 'react-icons/ai';


export default function Skills() {
  const [currSkill, setCurrSkill] = useState("Choose A Skill");
  const [currOpacity, setCurrOpacity] = useState(1);

  const TechClickHandler = (thisSkill: string) => {
    setCurrOpacity(0);
    setTimeout(() => {
      setCurrSkill(thisSkill)
      setTimeout(() => setCurrOpacity(1), 100)
    }, 100
  );
  };

  const fadeStyle = {
    opacity: currOpacity
  };

  const getContent = () => {
    switch (currSkill){
    case "Frontend":
      return <FrontendBlips />;
    case "Tools":
      return <ToolsBlips />;
    case "Backend": 
     return <BackendBlips />;
    default:
      return <p className={styles.instructions}>Click a part of the tech stack to view skills.</p>;
    }
  };

  return (
    <div id="skills" className={styles.skillsContainer}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.optionsDiv}>
        <DiscButton label={"Frontend"} Icon={MdMonitor} onClick={() => TechClickHandler("Frontend")} />
        <DiscButton label={"Tools"} Icon={HiOutlineWrenchScrewdriver} onClick={() => TechClickHandler("Tools")} />
        <DiscButton label={"Backend"} Icon={AiOutlineDatabase} onClick={() => TechClickHandler("Backend")} />
      </div>
      <div className={styles.rightSideContainer} style={fadeStyle}>
        <h2 className={styles.title}>{currSkill}</h2>
        <div className={styles.techDiv}>
          {getContent()}
        </div>
      </div>
    </div>
  )
}
