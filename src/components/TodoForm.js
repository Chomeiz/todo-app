import React, { useState, useEffect } from 'react'

const initialFormValues = {
    title: '',
    description: ''
}

function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [succesMessage, setSuccesMessage] = useState(null)

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);
        } else {
            setFormValues(initialFormValues);
        }
    }, [todoEdit])


    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        };

        setFormValues(changedFormValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Debes de cubrir el título de la tarea')
            return;
        }

        if (todoEdit) {
            //Actualizando
            todoUpdate(formValues);
            setSuccesMessage('Tarea actualizada correctamente');
        } else {
            //Agregar tarea
            todoAdd(formValues);
            setSuccesMessage('Tarea agregada correctamente');
            setFormValues(initialFormValues);
        }
        setTimeout(() => {
            setSuccesMessage(null);
        }, 2000);
        setError(null);
    };

    return (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h1>
            {
                todoEdit &&
                <button
                    onClick={() => setTodoEdit(null)}
                    className="btn btn-sm btn-warning mb-2"
                >Cancelar Edición
                </button>
            }
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange} />
                <textarea
                    placeholder="Descripción"
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange} />
                <button
                    className="btn btn-primary col-12 mt-2"
                >{todoEdit ? 'Actualizar' : 'Agregar'}
                </button>
            </form>

            {
                error && (
                    <div className="alert alert-danger mt-2">
                        {error}
                    </div>
                )
            }

            {
                succesMessage && (
                    <div className="alert alert-success mt-2">
                        {succesMessage}
                    </div>
                )

            }

        </div >
    );
}

export default TodoForm