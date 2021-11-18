import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {
    return (
        <div>
            <h1 className="text-end">Listado de Tareas</h1>
            {
                todos.length === 0
                    ? (
                        <div className="alert alert-primary">
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