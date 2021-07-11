import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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


const BTNSTYLE = styled.div`

`;

export default Button