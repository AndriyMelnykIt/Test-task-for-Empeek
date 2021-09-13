import React from 'react';

function Todo({text,todo, todos, setTodos}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))

    }


    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn">Delete</button>
        </div>
    );
}

export default Todo;