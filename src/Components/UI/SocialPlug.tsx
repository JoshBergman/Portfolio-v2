import React from 'react';
import { IconType } from 'react-icons';

import styles from './SocialPlug.module.css';

interface SocialPlugProps {
    Icon: IconType;
    fontSize: number;
    link: string;
    top?: number;
    downloader?: boolean;
    emailer?: boolean;
}

export default function SocialPlug({Icon, fontSize, link, top, downloader, emailer}:SocialPlugProps) {
    const anchorStyle = {
        fontSize: fontSize,
    };

    const iconStyle = {
        top: top + 'px'
    };

    if (downloader !== true && emailer !== true) {
return (
    <a 
    href={link}
    target='_blank'
    rel='noreferrer'
    style={anchorStyle}
    >
        {<Icon className={styles.icon} style={iconStyle} />}
    </a>
  );

    }
    if (emailer === true) {
        return (
            <a 
    href={link}
    style={anchorStyle}
    >
        {<Icon className={styles.icon} style={iconStyle} />}
    </a>
        );
    } else {
return (
    <a 
    href={link}
    download='Joshua-Bergman-Resume'
    target="_blank"
    rel="noreferrer"
    style={anchorStyle}
    >
        {<Icon className={styles.icon} style={iconStyle} />}
    </a>
    );
    }
}
