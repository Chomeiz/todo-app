import React from 'react';

const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit }) => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title text-end">
                    {todo.title}
                    <button
                        className={`btn btn_sm ${todo.completed ? "btn-success" : "btn-outline-success"} ms-2`}
                        onClick={() => todoToggleCompleted(todo.id)}
                    >
                        {todo.completed ? "Terminado" : "Terminar"}
                    </button>
                </h3>
                <p className="card-text text-end">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        onClick={() => setTodoEdit(todo)}
                        className="btn btn-sm btn-outline-primary me-2">
                        Editar
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => todoDelete(todo.id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Todo;
