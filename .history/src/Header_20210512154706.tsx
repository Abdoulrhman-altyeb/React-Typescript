import React from 'react'

interface Values {
    buttonText : string;
}

const Header:React.FC = (props:Props) => {
    return (
        <div>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default Header
