import React from 'react';

import TodoInterface from '../../interfaces';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface Todos {
  todos: TodoInterface[];
  deleteTodo: (arg: string) => void;
}

const TodoList = ({ todos, deleteTodo }: Todos) => {
  return (
    <ul className={styles.todoList}>
      {todos?.length > 0 &&
        todos.map(({ id, text }) => (
          <TodoItem
            key={id}
            todoText={text}
            todoId={id}
            todoDelete={deleteTodo}
          />
        ))}
    </ul>
  );
};

export default TodoList;
