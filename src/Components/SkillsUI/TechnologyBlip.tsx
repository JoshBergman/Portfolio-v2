import React from 'react';

import styles from './Tech.module.css';

interface BlipProps {
    pic: any;
    picAlt: string;
    children: string;
}

export default function TechnologyBlip({pic, picAlt, children}:BlipProps) {
  return (
    <div className={styles.blipDiv}>
        <img src={pic} alt={picAlt} className={styles.img} />
        <label className={styles.blipLabel}>
            {children}
        </label>
    </div>
  )
}
