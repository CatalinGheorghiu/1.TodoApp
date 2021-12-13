import React from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

interface DeleteModalProps {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (arg: boolean) => void;
  todoDelete: (arg: string) => void;
  todoId: string;
}

const DeleteModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  todoDelete,
  todoId,
}: DeleteModalProps) => {
  return (
    <Modal
      isOpen={isDeleteModalOpen}
      hide={() => setIsDeleteModalOpen(!isDeleteModalOpen)}>
      <Modal.Header>Are you sure you want to delete this item?</Modal.Header>
      <Modal.Body>
        <Button
          buttonClassName={'cancelBtnModal'}
          buttonType={'button'}
          buttonClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
          buttonText={'Cancel'}
        />
        <Button
          buttonClassName={'deleteBtnModal'}
          buttonType={'button'}
          buttonClick={() => todoDelete(todoId)}
          buttonText={'Delete'}
        />
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
