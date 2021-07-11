import React from 'react'

interface Values {
    buttonText : string;
}

const Header:React.FC = (props:Values) => {
    return (
        <div>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default Header
