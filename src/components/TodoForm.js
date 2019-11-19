import React from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = React.useState();
    const handleChanges = e => {
        setTodo(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} type="text">
            <input 
                placeholder="New To-Do Item" 
                type="text" 
                value={todo || ''} 
                onChange={handleChanges}
                className="todo-input"
            />

            <button
                onClick={()=> {
                    props.dispatch({ type: "ADD_TODO", payload: todo });
                }}
            >
                ADD
            </button>

            <button onClick={() => {
                    props.dispatch({ type: "CLEAR_COMPLETED" })
                    console.log(todo);
                }}
            >
                CLEAR Completed
            </button>
        </form>
    );
};

export default TodoForm;