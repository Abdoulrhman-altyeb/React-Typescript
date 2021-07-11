import React from 'react'


interface Person {
    firstName: string;
    lastName: string;
}

interface Values {
    buttonText: string;
    ok: boolean;
    i: number;
    fn: (par: string) => void;
    obj: {
        f1: string
    }
}

const Header:React.FC<Values> = () => {
    return (
        <div>
            <button>{buttonText}</button>
        </div>
    )
}

export default Header
