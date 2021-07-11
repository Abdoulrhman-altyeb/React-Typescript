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
            <Link to={btnLink}>{btnText}</Link>
        </BTNSTYLE>
    )
}


const BTNSTYLE = styled.div`
    padding-top:2rem;
    background:blue;
`;

export default Button