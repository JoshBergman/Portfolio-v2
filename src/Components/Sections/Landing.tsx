import React, { useEffect, useState } from 'react';
import AnchorButton from '../UI/AnchorButton';

import styles from './Landing.module.css';

export default function Landing() {
    const [containerOpacity, setContainerOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setContainerOpacity(1);
        }, 0.2);
    }, []);
    
    const containerStyle = {
        opacity: containerOpacity
    };

  return (
    <React.Fragment>
    <div id="home" className={styles.landingContainer} style={containerStyle}>
        <div className={styles.plugContainer}>
            PLUGS!!
        </div>
        <div className={styles.contentContainer}>
            <h1 className={styles.titleWords}>Hi, I'm <strong className={styles.titleStrong}>Josh.</strong></h1>
            <h2  className={styles.titleWords}>I'm a full stack developer.</h2>
            <AnchorButton href="home">Projects</AnchorButton>
            <AnchorButton href="home">Skills</AnchorButton>
            <AnchorButton href="home">About</AnchorButton>
            <AnchorButton href="home">Contact</AnchorButton>
        </div>
    </div>
    <div className={styles.spacerDiv} />
    </React.Fragment>
  )
}
