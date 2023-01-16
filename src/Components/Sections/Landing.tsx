import React, { useEffect, useState } from 'react';
import AnchorButton from '../UI/AnchorButton';
import SocialPlug from '../UI/SocialPlug';

import styles from './Landing.module.css';
import { links } from '../UI/Links';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail, MdContactPage } from 'react-icons/md';

export default function Landing() {
    const [containerOpacity, setContainerOpacity] = useState(0);
    const [containerTranslated, setContainerTranslated] = useState(-100);

    useEffect(() => {
        setTimeout(() => {
            setContainerOpacity(1);
            setContainerTranslated(0)
        }, 0.4);
    }, []);
    
    const containerStyle = {
        opacity: containerOpacity,
        transform: `translateX(${containerTranslated}px)`
    };

  return (
    <React.Fragment>
    <div id="home" className={styles.landingContainer} style={containerStyle}>
        <div className={styles.plugContainer}>
            <SocialPlug Icon={BsLinkedin} fontSize={30} link={links.linkedIn} top={2} />
            <SocialPlug Icon={FaGithubSquare} fontSize={34} link={links.gitHub} top={0} />
            <SocialPlug Icon={MdContactPage} fontSize={36} link={links.resume} downloader={true} top={0} />
            <SocialPlug Icon={MdEmail} fontSize={40} link={links.email} top={-2} />
        </div>
        <div className={styles.contentContainer}>
            <h1 className={styles.titleWords}>Hi, I'm <strong className={styles.titleStrong}>Josh.</strong></h1>
            <h2  className={styles.titleWords}>I'm a full stack developer.</h2>
            <div className={styles.btn} >
                <AnchorButton href="skills">Skills</AnchorButton>
                <AnchorButton href="projects">Projects</AnchorButton>
                <AnchorButton href="about">About</AnchorButton>
                <AnchorButton href="contact">Contact</AnchorButton>
            </div>
        </div>
    </div>
    <div className={styles.spacerDiv} />
    </React.Fragment>
  )
}
