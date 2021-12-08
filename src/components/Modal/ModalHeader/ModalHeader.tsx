import React from 'react';

import ModalChildrenProps from '../interfaces/modalInterfaces';
import styles from './ModalHeader.module.scss';

const ModalHeader = ({ children }: ModalChildrenProps) => (
  <div className={styles.modalHeader}>
    <h1 className={styles.modalTitle}>{children}</h1>
  </div>
);

export default ModalHeader;
