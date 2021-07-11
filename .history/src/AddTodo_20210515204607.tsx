import React,{ChangeEvent, useState} from 'react'


interface Props{
    // addHandel: () => void
}


const AddTodo: React.FC<Props> = () => {
    
    const [inputText, setInputText] = useState<string>();

    return (
        <form>
            <input type="text" value={inputText} onChange={(e:ChangeEvent) => setInputText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
        );
}


export default AddTodo