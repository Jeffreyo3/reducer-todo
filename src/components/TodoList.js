import React from "react";

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.state.todos.map(item => (
                <div key={item.id} 
                onClick={() => {
                    props.dispatch({ type: "TOGGLE_COMPLETED" });
                  }}
                  className={item.completed ? "completed" : ""}>
                    <p>{item.item}</p>
                    
                </div>
            ))}
        </div>
    );
};

export default TodoList;