import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Button:React.FC<ButtonProps> = ({btnLink,btnText,outline}) => {
    return (
        <BTNSTYLE>
            <Link className='button' to={btnLink} >{btnText}</Link>
        </BTNSTYLE>
    )
}


const BTNSTYLE = styled.div`
    padding-top:2rem;
    .button{
        background:lightgray;
        padding:0.9rem 2.5rem;
        color:black;
        border-radius:12px;
        border:2px solid lightgray;
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