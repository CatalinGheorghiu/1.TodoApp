import React, { useState } from 'react';

import DeleteIcon from '../../assets/DeleteIcon';
import EditIcon from '../../assets/EditIcon';
import Button from '../Button/Button';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todoText: string;
  todoId: string;
  todoDelete: (arg: string) => void;
  todoEdit: (id: string, text: string) => void;
}

const TodoItem = ({
  todoText,
  todoId,
  todoDelete,
  todoEdit,
}: TodoItemProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <li className={styles.listItem}>
        <p className={styles.listItem__text}>{todoText}</p>
        <div className={styles.listItem__buttonsContainer}>
          <Button
            buttonClassName={'editBtn'}
            buttonType={'button'}
            buttonClick={() => setIsEditModalOpen(true)}>
            <EditIcon />
          </Button>
          <Button
            buttonClassName={'deleteBtn'}
            buttonType={'button'}
            buttonClick={() => setIsDeleteModalOpen(true)}>
            <DeleteIcon />
          </Button>
        </div>
      </li>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        todoDelete={todoDelete}
        todoId={todoId}
      />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        todoEdit={todoEdit}
        todoId={todoId}
        todoText={todoText}
      />
    </>
  );
};

export default TodoItem;
