import React, { ReactElement, useState , useRef}from 'react'


interface Person {
    firstName: string;
    lastName: string;
}

interface Values {
    buttonText: string;
    ok: boolean;
    i: number;
    fn?: (par: string) => void;
    person: Person;
}

const Header:React.FC<Values> = ({buttonText, ok,i ,person}): ReactElement => {

    const [count, setCount] = useState<number>(i);
    const header = useRef<und>();

    const increment = () =>  {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increment}>{buttonText}</button>
            <p>{count}</p>

            <h1 ref={header}>THis is reffrance</h1>
        </div>
    )
}

export default Header
