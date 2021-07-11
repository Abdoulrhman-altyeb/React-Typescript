import React,{ChangeEvent, FormEvent, useState, useRef} from 'react'


interface Props{
    addHandel:addHandel
}


const AddTodo: React.FC<Props> = ({addHandel}) => {
    
    const button = userRef(null);
    const [inputText, setInputText] = useState<string>('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    const submitHandle = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addHandel(inputText);
        setInputText('')
    }
    return (
        <form>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button type="submit" onClick={submitHandle}>Add Todo</button>
        </form>
        );
}


export default AddTodo