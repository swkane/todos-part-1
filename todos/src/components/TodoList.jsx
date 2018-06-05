import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return (
        <ul className="todo-list">
            {props.todos.map((todo, i) => (
                <TodoItem key={i} text={todo.title} completed={todo.completed} 
                onDelete={props.onDelete(i)} onCompleted={props.onCompleted(i)} />
            ))}
        </ul>
    );
}

export default TodoList;