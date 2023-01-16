import React from 'react';

import styles from './LabeledPlug.module.css';
import { IconType } from 'react-icons';
export interface LabeledPlugProps {
    link: string;
    Icon: IconType;
    fontSize: number;
    label: string;
    marginLeft?: number;
    downloader?: boolean;
}

interface ILabeledPlugProps {
    props: LabeledPlugProps;
}

export default function LabeledPlug({props}:ILabeledPlugProps) {
    const Icon = props.Icon;

    const appliedStyles:{fontSize: number, marginLeft?: string} = {
        fontSize: props.fontSize
    };

    if(props.marginLeft) {
        appliedStyles.marginLeft = props.marginLeft + "px";
    }

    if(props.downloader !== true) {
  return (
    <div className={styles.plugContainer}>
        <a 
        href={props.link}
        rel="noreferrer"
        target="_blank"
        className={styles.anchor}
        >
        <Icon className={styles.icon} style={appliedStyles} />
        <label className={styles.label}>{props.label}</label>
        </a>
    </div>
  );
    } else {
        return (
    <div className={styles.plugContainer}>
        <a 
        href={props.link}
        download='Joshua-Bergman-Resume'
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
        >
        <Icon className={styles.icon} style={appliedStyles} />
        <label className={styles.label}>{props.label}</label>
        </a>
    </div>
        );
    }
}
