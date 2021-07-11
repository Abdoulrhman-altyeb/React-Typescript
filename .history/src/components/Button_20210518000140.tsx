import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Button:React.FC<ButtonProps> = ({btnLink='test',btnText='test',outline=true}) => {
    return (
        <BTNSTYLE outline={outline}>
            <Link className='button' to={btnLink} >{btnText}</Link>
        </BTNSTYLE>
    )
}


const BTNSTYLE = styled.div`
    padding-top:2rem;
    .button{
        background:${(prop => prop.outline ? 'transparent' : 'lightgray')};
        padding:0.7rem 2rem;
        color:${(prop => prop.outline ? 'lightgray' : 'black')};
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