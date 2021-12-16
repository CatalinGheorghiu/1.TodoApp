import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TodoListCompleted from './components/TodoListCompleted/TodoListCompleted';
import TodoListInProgress from './components/TodoListInProgress/TodoListInProgress';
import uuidGenerator from './helpers/generateUniqueID';
import TodoInterface from './interfaces';

const App = () => {
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inProgressTodos = todoList.filter((todo) => todo.inProgress);
  const completedTodos = todoList.filter((todo) => !todo.inProgress);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setError('');
    }
    setInputValue(event.target.value);
  };

  // Create todo
  const createTodo = () => {
    if (!inputValue) {
      setError('Please kindly add a value');
    } else {
      setTodoList((prevState) => [
        ...prevState,
        {
          id: uuidGenerator(),
          text: inputValue,
          inProgress: true,
        },
      ]);
      setError('');
    }

    setInputValue('');
  };

  // Edit todo
  const editTodo = (id: string, text: string) => {
    const newData = todoList.map(
      (todo): TodoInterface =>
        todo.id === id
          ? {
              ...todo,
              text: text,
            }
          : todo,
    );

    setTodoList(newData);
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    const newData = todoList.filter((todo) => todo.id !== id);
    setTodoList(newData);
  };

  // Check Todo
  const handleCheck = (id: string) => {
    const newData = todoList.map(
      (todo): TodoInterface =>
        todo.id === id
          ? {
              ...todo,
              inProgress: !todo.inProgress,
            }
          : todo,
    );

    setTodoList(newData);
  };

  // Get data from LS
  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const parsedTodos = JSON.parse(todos);
      setTodoList(parsedTodos);
    }
  }, []);

  // Set data to LS
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={styles.app}>
      <h1 className={styles.pageTitle}>
        Road to success: <span className={styles.highlightText}>Todo App</span>
      </h1>

      <div className={styles.wrapper}>
        <Input
          inputClassName="todoInput"
          inputType="text"
          inputValue={inputValue}
          inputOnChange={handleOnChange}
          inputPlaceholder="Add meaning to a todo"
        />

        <Button
          buttonClassName="addBtn"
          buttonType="button"
          buttonText="Add Todo"
          buttonClick={createTodo}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.todoContainer}>
        {todoList?.length > 0 ? (
          <>
            {inProgressTodos?.length > 0 && (
              <TodoListInProgress
                todos={inProgressTodos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                handleCheck={handleCheck}
              />
            )}
            {completedTodos.length > 0 && (
              <TodoListCompleted
                todos={completedTodos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                handleCheck={handleCheck}
              />
            )}
          </>
        ) : (
          <p>No todos yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
