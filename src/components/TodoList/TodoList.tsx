import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface Todos {
  todos: {
    id: string;
    text: string;
    complete: boolean;
  }[];
}

const TodoList = ({ todos }: Todos) => {
  return (
    <ul className={styles.todoList}>
      {todos?.length > 0 &&
        todos.map(({ id, text, complete }) => (
          <TodoItem key={id} todoText={text} todoStatus={complete} />
        ))}
    </ul>
  );
};

export default TodoList;
