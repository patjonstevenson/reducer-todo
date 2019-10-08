import React, { useReducer, useEffect } from 'react';
// Reducers
import { reducer, initialState } from "./reducers/reducer";
// Components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// Other
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : initialState.todos
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
