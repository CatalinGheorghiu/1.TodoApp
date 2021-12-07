import React from 'react';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  todoText: string;
  todoStatus?: boolean;
}

const TodoItem = ({ todoText, todoStatus }: TodoItemProps) => (
  <li className={styles.listItem}>
    <p className={styles.listItem__text}>{todoText}</p>
    <div className={styles.listItem__buttonsContainer}>
      {todoStatus ? (
        <button type="button" className={styles.listItem__buttonCompleted}>
          ➖
        </button>
      ) : (
        <button type="button" className={styles.listItem__buttonNotCompleted}>
          ❌
        </button>
      )}
    </div>
  </li>
);

export default TodoItem;
