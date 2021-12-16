import React from 'react';

import TodoInterface from '../../interfaces';
import TodoList from '../TodoList/TodoList';
import styles from './TodoListInProgress.module.scss';

interface Todos {
  todos: TodoInterface[];
  deleteTodo: (arg: string) => void;
  editTodo: (id: string, text: string) => void;
  handleCheck: (id: string) => void;
}

const TodoListInProgress = ({
  todos,
  deleteTodo,
  editTodo,
  handleCheck,
}: Todos) => {
  return (
    <div className={styles.inProgressList}>
      <h2>In Progress: {todos.length}</h2>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        handleCheck={handleCheck}
      />
    </div>
  );
};

export default TodoListInProgress;
