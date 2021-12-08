import React, { useState } from 'react';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todoText: string;
  todoId: string;
  todoDelete: (arg: string) => void;
}

const TodoItem = ({ todoText, todoId, todoDelete }: TodoItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <li className={styles.listItem}>
        <p className={styles.listItem__text}>{todoText}</p>
        <div className={styles.listItem__buttonsContainer}>
          <Button
            buttonClassName={'buttonNotCompleted'}
            buttonType={'button'}
            buttonClick={() => setIsModalOpen(true)}
            buttonText={'❌'}
          />
        </div>
      </li>

      <Modal isOpen={isModalOpen} hide={() => setIsModalOpen(!isModalOpen)}>
        <Modal.Header>Are you sure you want to delete this item?</Modal.Header>
        <Modal.Body>
          <Button
            buttonClassName={'cancelBtn'}
            buttonType={'button'}
            buttonClick={() => setIsModalOpen(!isModalOpen)}
            buttonText={'Cancel'}
          />
          <Button
            buttonClassName={'deleteBtn'}
            buttonType={'button'}
            buttonClick={() => todoDelete(todoId)}
            buttonText={'Delete'}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TodoItem;
