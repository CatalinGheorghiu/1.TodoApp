import React from 'react';

import styles from './TodoItem.module.scss';

const TodoItem = () => (
  <li className={styles.listItem}>
    <p className={styles.listItem__text}>Todo 1</p>
    <button type="button" className={styles.listItem__button}>
      ❌
    </button>
  </li>
);

export default TodoItem;
