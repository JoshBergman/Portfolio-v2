import React from 'react';

import styles from './SingleProject.module.css';

interface ProjectProps {
    desc: any;
    thumbnailImg: any;
    title: string;
}

export default function SingleProject() {
  return (
    <div className={styles.projectContainer} >
        <div className={styles.descContainer}>
            Description!
        </div>
        <div className={styles.thumbnailContainer}>
            Thumbnail!
        </div>
    </div>
  )
}
