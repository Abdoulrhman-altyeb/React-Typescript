import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface Props {
    btnLink: string;
    btnText: string;
}

const Button:React.FC<Props> = ({btnLink,btnText}) => {
    return (
        <BTNSTYLE>
            <Link className='button' to={btnLink}>{btnText}</Link>
        </BTNSTYLE>
    )
}


const BTNSTYLE = styled.div`
    padding-top:2rem;
    .button{
        background:lightgray;
        padding:1rem 2rem;
        color:red;
        border-radius:12px;
        cursor:pointer;
    }
`;

export default Button