import React from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.pageTitle}>
      Road to success: <span className={styles.highlightText}>Todo App</span>
    </h1>

    <div className={styles.wrapper}>
      <Input
        inputClassName="todoInput"
        inputType="text"
        inputPlaceholder="Add Todo"
      />
      <Button
        buttonClassName="addBtn"
        buttonType="button"
        buttonText="Add Todo"
      />
    </div>
    <div className={styles.todoContainer}>
      <TodoList />
    </div>
  </div>
);

export default App;
