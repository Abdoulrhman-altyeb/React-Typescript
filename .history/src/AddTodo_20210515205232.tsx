import React,{ChangeEvent, FormEvent, useState} from 'react'


interface Props{
    // addHandel: () => void
}


const AddTodo: React.FC<Props> = () => {
    
    const [inputText, setInputText] = useState<string>('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    const submitHandle = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    return (
        <form>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button type="submit">Add Todo</button>
        </form>
        );
}


export default AddTodo