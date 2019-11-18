import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);



    return (
        <div className="todo-list">
            {state.map(item => (
                <div className="todo">
                    {item.item}
                    <button>Completed? {item.completed}</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;