import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo_container">
            <ul className="todo_list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key = {todo.id} 
                        text = {todo.text}
                        todos = {todos}
                        setTodos = {setTodos}
                        todo = {todo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;