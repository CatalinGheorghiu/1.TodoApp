import React from 'react';

import TodoInterface from '../../interfaces';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface Todos {
  todos: TodoInterface[];
  deleteTodo: (arg: string) => void;
  editTodo: (id: string, text: string) => void;
}

const TodoList = ({ todos, deleteTodo, editTodo }: Todos) => {
  return (
    <ul className={styles.todoList}>
      {todos?.length > 0 &&
        todos.map(({ id, text }) => (
          <TodoItem
            key={id}
            todoText={text}
            todoId={id}
            todoDelete={deleteTodo}
            todoEdit={editTodo}
          />
        ))}
    </ul>
  );
};

export default TodoList;
