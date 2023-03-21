import React from 'react';

import styles from './DiscButton.module.css';

interface DiscButtonProps {
    onClick: () => void;
    Icon: any;
    label: string;
}

export default function DiscButton({onClick, Icon, label}: DiscButtonProps) {
  return (
    <React.Fragment>
    <div className={styles.btnCard}>
    <label className={styles.btnLabel}>{label}</label>
    <button onClick={onClick} className={styles.btn}>
        <Icon className={styles.icon} />
      </button>
    </div>
    </React.Fragment>
  );
}
