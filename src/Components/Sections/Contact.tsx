import React from 'react';

import styles from './Contact.module.css';
import LabeledPlug from '../UI/LabeledPlug';
import { LabeledPlugProps } from '../UI/LabeledPlug';
import { links } from '../UI/Links';

import { BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail, MdContactPage } from 'react-icons/md';
import { Link } from 'react-scroll';

export default function Contact() {
    const currFontSize = 50;

    const emailInfo: LabeledPlugProps = {
        link: links.email,
        Icon: MdEmail,
        fontSize: currFontSize,
        label: "Josh.Bergman1@pm.me",
        emailer: true
    };

    const linkedInInfo: LabeledPlugProps = {
        link: links.linkedIn,
        Icon: BsLinkedin,
        fontSize: currFontSize - 8,
        label: " Joshua Bergman",
        marginLeft: 4
    };

    const gitHubInfo: LabeledPlugProps = {
        link: links.gitHub,
        Icon: FaGithubSquare,
        fontSize: currFontSize,
        label: "JoshBergman"
    };

    const resumeInfo: LabeledPlugProps = {
        link: links.resume,
        Icon: MdContactPage,
        fontSize: currFontSize,
        label: "Resume",
        downloader: true
    };

  return (
    <div className={styles.contactContainer} id="contact">
        <h2 className={styles.title}>Contact Me</h2>
        <h3 className={styles.subTitle}>
            *The best way to reach me is to email me at 
            <strong className={styles.strong}><a className={styles.strongAnchor} href={links.email}> josh.bergman1@pm.me</a></strong>
        </h3>
        <div className={styles.plugsContainer}>
            <div className={styles.subPlugsContainer}>
                <LabeledPlug props={emailInfo} />
                <LabeledPlug props={linkedInInfo} />
            </div>
            <div className={styles.subPlugsContainer} >
                <LabeledPlug props={gitHubInfo} />
                <LabeledPlug props={resumeInfo} />
            </div>
        </div>
        <div className={styles.goUpDiv}>
            <Link to="home" smooth={true}><BsFillArrowUpCircleFill className={styles.upIcon}/></Link>
        </div>
    </div>
  );
}
