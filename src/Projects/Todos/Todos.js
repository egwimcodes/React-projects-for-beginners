import React, { useState } from 'react';
import './Todos.css';

function Todos() {
    const [todos, setTodos] = useState([{ id: 1, text: 'Hike the trails', completed: false }]);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            console.log(input.trim);
            setTodos([...todos, { id: todos.length + 1, text: input, completed: false }]);
            setInput('');
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggle = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    return (
        <div className="container">
            <div className="children">
                <div className="addTodo">
                    <form onSubmit={handleSubmit}>
                        <input
                            id='addText'
                            type="text"
                            name='newtext'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Add a new todo..."
                        />
                        <button className='sbtn' type="submit">Add</button>
                    </form>
                </div>
                <div className="header">
                    <h2>Todos</h2>
                </div>
                <div className="todos">
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <div className="items">
                                <p>{todo.text.split(' ').slice(0, 3).join(' ')}</p>
                                <div className="btns">
                                    <button className='sbtn dbtn' onClick={() => handleToggle(todo.id)}>{todo.completed ? 'Undo ↩️' : 'Complete ✅'}</button>
                                    <button className='sbtn dbtn' onClick={() => handleDelete(todo.id)}>X</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Todos;
