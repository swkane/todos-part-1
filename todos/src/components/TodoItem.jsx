import React from 'react';

const TodoItem = props => {
    return (
        <li className={props.completed ? 'completed' : ''}>
            <div className="view">
                <input onChange={props.onCompleted} className="toggle" type="checkbox" checked={props.completed} />
                <label>{props.text}</label>
                <button onClick={props.onDelete} className="destroy"></button>
            </div>
        </li>
    );
}

export default TodoItem;