import React from 'react'


interface Props{
    addHandel: () => void
}


const AddTodo: React.FC<Props> = ({addHandel}) => {
    return (
        <form>
            <input type="text" />
            <button type="submit">Add Todo</button>
        </form>
        );
}


export default AddTodo