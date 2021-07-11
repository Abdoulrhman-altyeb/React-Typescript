import React from 'react'
import { FC } from 'react';
interface Values {
    buttonText : string;
}

const Header:FC = ({buttonText} :Values): => {
    return (
        <div>
            <button>{buttonText}</button>
        </div>
    )
}

export default Header
