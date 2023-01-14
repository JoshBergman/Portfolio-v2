import React from 'react';
import SingleProject from '../ProjectsUI/SingleProject';

import styles from './Project.module.css';

export default function Project() {
  return (
    <div className={styles.projectsContainer} id="projects">
        <SingleProject />
        <SingleProject />
    </div>
  );
}
