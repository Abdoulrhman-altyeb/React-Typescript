import React, { useState }from 'react'


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

const Header:React.FC<Values> = ({buttonText, ok,i ,person}) => {

    const [number, setNumber] = useState();

    return (
        <div>
            <button>{buttonText}</button>
            <p>{i}</p>
        </div>
    )
}

export default Header
