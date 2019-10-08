import React, { useState } from "react";
import Todo from "./Todo";

const TodoForm = ({ dispatch }) => {
    const [name, setName] = useState("");

    const handleChanges = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: name });
        setName("");
    }

    return (
        <div className="todo-form">
            <input value={name} onChange={handleChanges} />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default TodoForm;