import React from 'react'
interface Values {
    buttonText : string;
}

const Header:React.FC<Values> = () => {
    return (
        <div>
            {/* <button>{buttonText}</button> */}
        </div>
    )
}

export default Header
