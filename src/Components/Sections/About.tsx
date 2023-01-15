import React from 'react';

import styles from './About.module.css';
import { aboutMeDescriptions } from './ProjectDescriptions';

export default function About() {
  return (
    <div className={styles.aboutMeContainer} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.subjectAlignmentContainer} >
            <div className={styles.subjectContainer}>
                <h3 className={styles.subjectTitle}>Life-Long "Computer Guy"</h3>
                <p className={styles.text}>{aboutMeDescriptions.personalHistory}</p>
            </div>
            <div className={styles.subjectContainer}>
                <h3 className={styles.subjectTitle}>Education & Work</h3>
                <p className={styles.text}>{aboutMeDescriptions.workAndSchool}</p>
            </div>
        </div>
    </div>
  );
}
