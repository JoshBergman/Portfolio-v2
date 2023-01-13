import React from 'react';
import { IconType } from 'react-icons';

import styles from './SocialPlug.module.css';

interface SocialPlugProps {
    Icon: IconType;
    fontSize: number;
    link: string;
    top?: number;
}

export default function SocialPlug({Icon, fontSize, link, top}:SocialPlugProps) {
    const anchorStyle = {
        fontSize: fontSize,
    };

    const iconStyle = {
        top: top + 'px'
    };

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
