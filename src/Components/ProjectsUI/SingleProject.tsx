import React from 'react';

import styles from './SingleProject.module.css';

export interface ProjectInfo {
    desc: string;
    img: string;
    imgAlt: string;
    title: string;
    alternate: boolean; //decides whether to render components in alternating order
    techs?: string[];
}

interface ProjectProps {
  ProjectInfo: ProjectInfo
}

export default function SingleProject(ProjectDetails:ProjectProps) {
  const info = ProjectDetails.ProjectInfo;

  const descContainerClass = info.alternate ? styles.altDescContainer : styles.descContainer;
  const thumbnailContainerClass = info.alternate ? styles.altThumbnailContainer : styles.thumbnailContainer;

  const getTechs = () => {
    if(info.techs && info.techs.length >= 1){
      return (
        <div className={styles.techsContainer} >
          {
          info.techs.map((tech) =>
            <div className={styles.tech}>
                {tech}
            </div>)
          }
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className={styles.projectContainer} >
        <div className={descContainerClass}>
          <h3 className={styles.title}>{info.title}</h3>
          {getTechs()}
            <p className={styles.desc} >{info.desc}</p>
        </div>
        <div className={thumbnailContainerClass}>
            <div className={styles.imgContainer} >
            <img src={info.img} alt={info.imgAlt} className={styles.img} />
            </div>
        </div>
    </div>
  )
}
