import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';

interface ModalProps {
  isOpen: boolean;
  hide: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, hide, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const portalContainer = document.getElementById('modal')!;

  const closeModal = (e: React.SyntheticEvent) => {
    if (modalRef.current === e.target) {
      hide();
    }
  };

  const escapeKeyCloseModal = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        hide();
      }
    },
    [isOpen, hide],
  );

  useEffect(() => {
    document.addEventListener('keydown', escapeKeyCloseModal);
    return () => document.removeEventListener('keydown', escapeKeyCloseModal);
  }, [escapeKeyCloseModal]);
  return createPortal(
    <div className={styles.modalContainer}>
      {isOpen && (
        <div>
          <div
            className={styles.overlay}
            ref={modalRef}
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className={styles.modal}>{children}</div>
        </div>
      )}
    </div>,
    portalContainer,
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
