import React from 'react';
import { Link } from 'react-router-dom'

interface Props {
    btnLink: string;
}

const Button:React.FC<Props> = () => {
    return (
        <div>
            <Link to='/projects'>This is a button</Link>
        </div>
    )
}

export default Button