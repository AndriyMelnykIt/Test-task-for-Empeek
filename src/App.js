import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import './App.css';
import TodoList from "./components/TodoList";

function App() {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        saveLocalTodos()
    }, [todos])


    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }

    return (
        <div className="App">
            <header>
                <p className="item">Items</p>
            </header>
            <div className="block">
                <h1>dairy app</h1>
                <p>Comment with no sense</p>
            </div>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}/>
            <TodoList
                setTodos={setTodos}
                todos={todos}/>
        </div>
    );
}

export default App;
