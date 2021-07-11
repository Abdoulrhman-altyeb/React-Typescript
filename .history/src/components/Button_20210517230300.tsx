import React from 'react';
import { Link } from 'react-router-dom'

interface Props {
    btnLink: string;
    btnText: string;
}

const Button:React.FC<Props> = ({btnLink,btnText}) => {
    return (
        <div>
            <Link to={btnLink}>{btnText}</Link>
        </div>
    )
}

export default Button