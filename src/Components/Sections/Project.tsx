import React from 'react';
import SingleProject from '../ProjectsUI/SingleProject';

import styles from './Project.module.css';
import { ProjectInfo } from '../ProjectsUI/SingleProject';
import { descriptions } from './ProjectDescriptions';

import AlgoExample from '../ProjectsUI/Thumbnails/AlgoExample.png';
import APIMonitor from '../ProjectsUI/Thumbnails/APIMonitor.png';
import QuickBudgetTool from '../ProjectsUI/Thumbnails/QuickBudgetTool.png';
import MikesFrameService from '../ProjectsUI/Thumbnails/MikesFrameService.png';


export default function Project() {

  const algoExample: ProjectInfo = {
    img: AlgoExample,
    imgAlt: "Algo Example thumbnail",
    title: "Algo Example",
    desc: descriptions.algoExample,
    techs: ["React", "TS", "Collaborative"],
    alternate: true,
    site: "https://algoexample.com",
    frontend: "https://github.com/JoshBergman/Algorithms-Explained"
  };
  
  const APIMonitorInfo: ProjectInfo = {
    img: APIMonitor,
    imgAlt: "A.P.I. Monitor dot dev thumbnail",
    title: "API Monitor.dev",
    desc: descriptions.apimonitor,
    techs: ["React", "Node.js", "MongoDB", "Express.js", "TS"],
    alternate: false,
    site: "https://apimonitor.dev/",
    frontend: "https://github.com/JoshBergman/Api-Monitor-Frontend",
    backend: "https://github.com/JoshBergman/Api-Monitor-Backend"
  };

  const quickBudgetToolInfo: ProjectInfo = {
    img: QuickBudgetTool,
    imgAlt: "Quick Budget Tool Thumbnail",
    title: "Quick Budget Tool",
    desc: descriptions.quickbudgettool,
    techs: ["React", "Node.js", "Express.js"],
    alternate: false,
    site: "https://quickbudgettool.com/tool"
  };

  const MikesFrameServiceInfo: ProjectInfo = {
    img: MikesFrameService,
    imgAlt: "Mikes Frame Service Thumbnail",
    title: "Mikes Frame Service",
    desc: descriptions.mikesframeservice,
    techs: ["React", "Node.js", "Express.js"],
    alternate: true,
    site: "https://mikesframe-25201.web.app/home",
    frontend: "https://github.com/JoshBergman/MikesFrameServiceV2"
  };

  return (
    <div className={styles.projectsContainer} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <SingleProject ProjectInfo={algoExample} />
        <SingleProject ProjectInfo={APIMonitorInfo} />
        <SingleProject ProjectInfo={MikesFrameServiceInfo} />
        <SingleProject ProjectInfo={quickBudgetToolInfo} />
    </div>
  );
}
