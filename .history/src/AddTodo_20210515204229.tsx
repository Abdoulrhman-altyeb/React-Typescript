import React from 'react'


interface Props{
    addHandel: () => {}
}


const AddTodo: React.FC<Props> = ({addHandel}) => {
    return (
        <form>
            <input type="text" />
            <button type="submit" onclick={addHandel}>Add Todo</button>
        </form>
        );
}


export default AddTodo