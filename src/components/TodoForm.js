import React from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = React.useState();
    const handleChanges = e => {
        setTodo(e.target.value);
    };

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input 
                placeholder="New To-Do Item" 
                type="text" 
                value={todo} 
                onChange={handleChanges}
                className="todo-input"
            />

            <button
                onClick={()=> {
                    props.dispatch({type: "ADD_TODO", payload: todo });
                }}
            >
                ADD
            </button>
        </form>
    );
};

export default TodoForm;