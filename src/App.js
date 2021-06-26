import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
    
    //use states
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState(["All"]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    //run only when the app starts
    useEffect(() => {
        getLocalTodos();
    }, []);

    //use Effect
    useEffect(() =>{
        const filterHandler = () => {
            switch(status){
                case 'completed':
                    setFilteredTodos(todos.filter(todo => todo.completed === true))
                    break;
                case 'uncompleted':
                    setFilteredTodos(todos.filter(todo => todo.completed === false))
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        filterHandler();
    }, [todos,status]);

    useEffect(() => {
        //Save to local
        const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        };
        saveLocalTodos();
    }, [todos]);

    //get local todo values
    
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else{
            let localTodoList = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodoList);
        }
    };

    return ( 
        <div className = "App">
            <header>
                <h1>
                    Todo List
                </h1>
            </header>
            <Form 
                inputText = {inputText} 
                todos = {todos} 
                setTodos = {setTodos} 
                setInputText = {setInputText}
                setStatus = {setStatus}                
            />
            <TodoList 
                todos = {todos}
                setTodos = {setTodos}
                filteredTodos = {filteredTodos}
            />
        </div>
    );
}

export default App;