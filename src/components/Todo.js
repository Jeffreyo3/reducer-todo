import React from 'react';

function Todo(props) {
    let verboseClassName = "item";
    if (props.item.completed) {
        verboseClassName += "Completed";
    }

    const handleClick = () => {
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id })
    }

    return (
        <div key={props.item.id}
        className={verboseClassName}
        onClick={handleClick}>
            {props.item.item}
        </div>
    )
}

export default Todo;