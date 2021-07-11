import React from 'react'

interface Props {
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

interface Props {
    buttonText : string;
}
eprops:Propsxport default Header:React.FC
