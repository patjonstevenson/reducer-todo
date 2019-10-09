import React from 'react';
import { reducer, initialState } from "../reducers/reducer";
import Todo from "./Todo";

const TodoList = ({ state, dispatch }) => {

    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
            {state.todos.map(todo => (
                <Todo todo={todo} dispatch={dispatch} />
            ))}
        </div>
    )
}
export default TodoList;