import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import uuidGenerator from './helpers/generateUniqueID';
import TodoInterface from './interfaces';

const App = () => {
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

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
          complete: false,
        },
      ]);
      setError('');
    }

    setInputValue('');
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    const newData = todoList.filter((todo) => todo.id !== id);
    setTodoList(newData);
  };

  // Get data from LS
  useEffect(() => {
    const data = localStorage.getItem('todos');

    if (data) {
      setTodoList(JSON.parse(data));
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
          <TodoList todos={todoList} deleteTodo={deleteTodo} />
        ) : (
          <p>No todos yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
