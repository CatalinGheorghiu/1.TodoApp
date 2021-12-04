import React from 'react';

const App = () => (
  <div className="App">
    <h1>Road to success: Todo App</h1>

    <label>
      <input type="text" placeholder="Add todo" />
    </label>
    <button type="button">Add Todo</button>
    <div className="todos">
      <ul>
        <li>
          <p>Todo 1</p>
          <button>❌</button>
        </li>
        <li>
          <p>Todo 2</p>
          <button>❌</button>
        </li>
        <li>
          <p>Todo 3</p>
          <button>❌</button>
        </li>
      </ul>
    </div>
  </div>
);

export default App;
