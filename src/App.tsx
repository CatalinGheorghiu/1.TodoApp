import React from 'react';

import styles from './App.module.scss';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <div className={styles.app}>
    <h1>Road to success: Todo App</h1>

    <label>
      <input type="text" placeholder="Add todo" />
    </label>
    <button type="button">Add Todo</button>
    <div className={styles.todoContainer}>
      <TodoList />
    </div>
  </div>
);

export default App;
