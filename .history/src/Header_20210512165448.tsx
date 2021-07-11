import React, { ReactElement, useState , useRef, ReactComponentElement}from 'react'


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

const Header:React.FC<Values> = ({buttonText, ok,i ,person}): ReactComponentElement => {

    const [count, setCount] = useState<number>(i);
    const header = useRef<HTMLParagraphElement>(null);

    const increment = () =>  {
        setCount(count + 1)
        console.log(header)
    }

    return (
        <div>
            <button onClick={increment}>{buttonText}</button>
            <p>{count}</p>

            <p ref={header}>THis is reffrance</p>
        </div>
    )
}

export default Header
