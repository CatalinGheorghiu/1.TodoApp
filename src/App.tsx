import React from 'react';
import TodoItem from './components/TodoItem/TodoItem';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <h1>Road to success: Todo App</h1>

    <label>
      <input type="text" placeholder="Add todo" />
    </label>
    <button type="button">Add Todo</button>
    <div
      className="todos"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <ul
        style={{
          maxWidth: '450px',
          width: '100%',
        }}>
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
    </div>
  </div>
);

export default App;
