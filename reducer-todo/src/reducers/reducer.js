import moment from "moment";

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, {
                    item: action.payload,
                    completed: false,
                    id: moment().format("MMM Do YYYY, h:mm:ss a")
                }]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload.id),
                {
                    ...action.payload,
                    completed: !state.completed
                }]
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}

export const initialState = {
    todos: []
}