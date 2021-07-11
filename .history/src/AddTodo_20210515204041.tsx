import React from 'react'


interface Props{

}


const AddTodo: React.FC<Props> = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">Add Todo</button>
        </form>
        );
}


export default AddTodo