import React, { useState } from 'react';

import DeleteIcon from '../../assets/DeleteIcon';
import EditIcon from '../../assets/EditIcon';
import TodoInterface from '../../interfaces';
import Button from '../Button/Button';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import Input from '../Input/Input';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todo: TodoInterface;
  todoDelete: (arg: string) => void;
  todoEdit: (id: string, text: string) => void;
  handleCheck: (id: string) => void;
}

const TodoItem = ({
  todo,
  todoDelete,
  todoEdit,
  handleCheck,
}: TodoItemProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <li
        className={`${styles.listItem} ${
          todo.inProgress
            ? styles['listItem__inProgress']
            : styles['listItem__completed']
        }`}>
        <p className={styles.listItem__text}>{todo.text}</p>
        <div className={styles.listItem__buttonsContainer}>
          <Input
            inputType="checkbox"
            inputClassName="checkbox"
            inputOnChange={() => handleCheck(todo.id)}
            checked={!todo.inProgress}
          />
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
        todoId={todo.id}
      />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        todoEdit={todoEdit}
        todoId={todo.id}
        todoText={todo.text}
      />
    </>
  );
};

export default TodoItem;
