import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h2 className="text-end display-4">Listado de Tareas</h2>
            {
                todos.length === 0
                    ? (
                        <div className="alert alert-primary text-end">
                            No hay tareas. Crea una en el formulario {":)"}
                        </div>
                    )
                    : (
                        todos.map(todo => (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                todoDelete={todoDelete}
                                todoToggleCompleted={todoToggleCompleted}
                                setTodoEdit={setTodoEdit}
                            />
                        ))
                    )
            }
        </div>
    );
}

export default TodoList