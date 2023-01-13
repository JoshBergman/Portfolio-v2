import React from 'react';
import { Link } from "react-scroll";

import styles from './AnchorButton.module.css';

interface AnchorButtonProps {
    children: string;
    href: string;
}

export default function AnchorButton({children, href}:AnchorButtonProps) {
  return (
    <Link smooth={true} to={href}>
      <button className={styles.btnSlide}>
        {children}
      </button>
    </Link>
  )
}
