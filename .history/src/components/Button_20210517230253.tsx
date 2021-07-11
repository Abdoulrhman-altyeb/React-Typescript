import React from 'react';
import { Link } from 'react-router-dom'

interface Props {
    btnLink: string;
    btnText: string;
}

const Button:React.FC<Props> = ({btnLink}) => {
    return (
        <div>
            <Link to={btnLink}>This is a button</Link>
        </div>
    )
}

export default Button