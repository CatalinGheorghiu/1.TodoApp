import React from 'react';

import TodoInterface from '../../interfaces';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';

interface Todos {
  todos: TodoInterface[];
  deleteTodo: (arg: string) => void;
  editTodo: (id: string, text: string) => void;
  handleCheck: (id: string) => void;
}

const TodoList = ({ todos, deleteTodo, editTodo, handleCheck }: Todos) => {
  return (
    <>
      <ul className={styles.todoList}>
        {todos?.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todoDelete={deleteTodo}
              todoEdit={editTodo}
              handleCheck={handleCheck}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
