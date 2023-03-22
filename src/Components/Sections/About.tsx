import React, { useState } from 'react';
import { BsArrow90DegUp } from 'react-icons/bs';
import { Link } from 'react-scroll';

import styles from './About.module.css';
import { aboutMeDescriptions } from './ProjectDescriptions';

export default function About() {
  const [showingMore, setShowingMore] = useState(false);

  const toggleShowMore = () => {
    setShowingMore(prev => !prev);
  };

  return (
    <div className={styles.aboutMeContainer} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.subjectContainer}>
      {!showingMore && 
      <React.Fragment>
          <h3 className={styles.subTitle}>TLDR</h3>
          <p className={styles.text}>
            {aboutMeDescriptions.tldr}
            <Link to="projects" smooth={true} className={styles.textLink}>projects</Link>
            {aboutMeDescriptions.tldr2}
          </p>

          <button className={styles.arrowBtn} onClick={toggleShowMore}>Show More<BsArrow90DegUp className={styles.arrow} /></button>
        </React.Fragment>
      }
      {showingMore && 
      <React.Fragment>
          <h3 className={styles.subTitle}>TLDR</h3>
          <p className={styles.text}>
            {aboutMeDescriptions.tldr}
            <Link to="projects" smooth={true} className={styles.textLink}>projects</Link>
            {aboutMeDescriptions.tldr2}
          </p>

          <h3 className={styles.subTitle}>Work & Education</h3>
          <p className={styles.text}>{aboutMeDescriptions.workSchool}</p>

          <h3 className={styles.subTitle}>Actually About Me</h3>
          <p className={styles.text}>{aboutMeDescriptions.actualAbout}</p>


        <button  className={styles.arrowBtn} onClick={toggleShowMore}><BsArrow90DegUp />Show Less</button>
      </React.Fragment>
      }
      </div>
    </div>
  );
}
