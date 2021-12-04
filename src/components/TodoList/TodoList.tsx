import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

const TodoList = () => (
  <ul className={styles.todoList}>
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </ul>
);

export default TodoList;
