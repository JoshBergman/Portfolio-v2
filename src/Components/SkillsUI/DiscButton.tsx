import React from 'react';

import styles from './DiscButton.module.css';
import { RiCoinLine } from 'react-icons/ri';

interface DiscButtonProps {
    onClick: () => void;
}

export default function DiscButton({onClick}:DiscButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn}><RiCoinLine className={styles.icon} /></button>
  )
}
