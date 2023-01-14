import React from 'react';
import SingleProject from '../ProjectsUI/SingleProject';

import styles from './Project.module.css';
import { ProjectInfo } from '../ProjectsUI/SingleProject';
import { descriptions } from './ProjectDescriptions';

import APIMonitor from '../ProjectsUI/Thumbnails/APIMonitor.png';


export default function Project() {
  
  const APIMonitorInfo: ProjectInfo = {
    img: APIMonitor,
    imgAlt: "A.P.I. Monitor dot dev thumbnail",
    title: "API Monitor.dev",
    desc: descriptions.apimonitor,
    techs: ["React", "Node.js", "MongoDB", "Express.js", "Typescript"],
    alternate: false,
  };

  return (
    <div className={styles.projectsContainer} id="projects">
        <SingleProject ProjectInfo={APIMonitorInfo} />
    </div>
  );
}
