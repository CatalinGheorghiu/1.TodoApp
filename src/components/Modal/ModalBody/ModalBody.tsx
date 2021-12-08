import React from 'react';

import ModalChildrenProps from '../interfaces/modalInterfaces';
import styles from './ModalBody.module.scss';

const ModalBody = ({ children }: ModalChildrenProps) => (
  <div className={styles.modalBody}>{children}</div>
);

export default ModalBody;
