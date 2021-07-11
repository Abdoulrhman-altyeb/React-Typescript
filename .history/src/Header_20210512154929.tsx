import React from 'react'
interface Values {
    buttonText : string;
}

const Header:React.FC = ({buttonText} : Values) => {
    return (
        <div>
            <button>{buttonText}</button>
        </div>
    )
}

export default Header
