import React, { useReducer } from 'react';

const Todo = ({ todo, dispatch }) => {

    return (
        <div
            className={`todo${todo.completed ? " completed" : ""}`}
            onClick={() => dispatch({
                type: "TOGGLE_COMPLETED",
                payload: todo
            })}
        >
            <h3>{todo.item}</h3>
        </div>
    )
}
export default Todo;