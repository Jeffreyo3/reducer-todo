
import './App.css';
import React, { useReducer } from "react";
import { initialState, todoReducer } from './reducers/todoReducer';

import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>React Reducer To Do List</h1>
        <TodoList key={state.id} state={state} dispatch={dispatch} />
        {/* <TodoForm dispatch={dispatch} /> */}

    </div>
  );
}

export default App;
