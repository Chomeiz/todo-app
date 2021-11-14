import React from 'react'
import Todo from './Todo';

const todos = [
    {
        title: 'Todo #1',
        description: 'Desc del Todo #1',
        completed: false
    },
    {
        title: 'Todo #2',
        description: 'Desc del Todo #2',
        completed: true
    }
];

const TodoList = () => {
    return (
        <div>
            <h1 className="text-end">Soy TodoList</h1>
            {
                todos.map(todo => <Todo todo={todo} />)
            }
        </div>
    );
}

export default TodoList