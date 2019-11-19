import React from "react";

import Todo from './Todo';


const TodoList = (props) => {
    console.log(props.state.todos);
    return(
        <div className="todo-list">
            {props.state.todos.map(item => (
                    <Todo 
                        dispatch={props.dispatch}
                        todos={props.state.todos}
                        item={item}
                        key={item.id}
                    />
            ))}
        </div>
    );
};


export default TodoList;