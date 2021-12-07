import React from 'react';

import Button from '../Button/Button';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todoText: string;
  todoId: string;
  todoDelete: (arg: string) => void;
}

const TodoItem = ({ todoText, todoId, todoDelete }: TodoItemProps) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItem__text}>{todoText}</p>
      <div className={styles.listItem__buttonsContainer}>
        <Button
          buttonClassName={'buttonNotCompleted'}
          buttonType={'button'}
          buttonClick={() => todoDelete(todoId)}
          buttonText={'❌'}
        />
      </div>
    </li>
  );
};

export default TodoItem;
