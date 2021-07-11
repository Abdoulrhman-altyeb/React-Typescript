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
        padding:0.7rem 2rem;
        color:red;
        border-radius:12px;
        border:2px solid black;
        cursor:pointer;
        font-size:1.4rem;
    }
    @media only screen and (max-width:768px) {
        .button{
            font-size:1.2rem;
        }
    }
`;

export default Button