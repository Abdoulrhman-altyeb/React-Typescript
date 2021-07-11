import React from 'react'
import { FC } from 'react';
interface Values {
    buttonText : string;
}

const Header:FC = ({buttonText}): => {
    return (
        <div>
            <button>{buttonText}</button>
        </div>
    )
}

export default Header
