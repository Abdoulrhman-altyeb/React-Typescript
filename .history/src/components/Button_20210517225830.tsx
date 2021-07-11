import React from 'react';
import { Link } from 'react-router-dom'

const Button:React.FC = () => {
    return (
        <div>
            <Link to='/'>This is a button</Link>
        </div>
    )
}

export default Button