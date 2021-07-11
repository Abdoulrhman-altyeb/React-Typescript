import React,{ChangeEvent, useState} from 'react'


interface Props{
    // addHandel: () => void
}


const AddTodo: React.FC<Props> = () => {
    
    const [inputText, setInputText] = useState<string>();
    const changeHandler = (e: ChangeEvent) => {
        console.log(e.target.nodeValue)
    }
    return (
        <form>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button type="submit">Add Todo</button>
        </form>
        );
}


export default AddTodo