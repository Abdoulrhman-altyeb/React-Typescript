import React,{ChangeEvent, useState} from 'react'


interface Props{
    // addHandel: () => void
}


const AddTodo: React.FC<Props> = () => {
    
    const [inputText, setInputText] = useState<string>('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    return (
        <form>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button type="submit" onCLick={submitHandle}>Add Todo</button>
        </form>
        );
}


export default AddTodo