import React from 'react';

import ModalChildrenProps from '../interfaces/modalInterfaces';
import styles from './ModalFooter.module.scss';

const ModalFooter = ({ children }: ModalChildrenProps) => (
  <div className={styles.modalFooter}>{children}</div>
);

export default ModalFooter;
