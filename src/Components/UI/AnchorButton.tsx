import React from 'react';

import styles from './AnchorButton.module.css';

interface AnchorButtonProps {
    children: string;
    href: string;
}

export default function AnchorButton({children, href}:AnchorButtonProps) {
  return (
    <a href={href}>
        <button>
            {children}
        </button>
    </a>
  )
}
