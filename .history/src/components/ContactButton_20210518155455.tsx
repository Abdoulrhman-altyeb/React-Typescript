import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const ContactButton: React.FC = () => {
    return (
        <STYLEDIV>
            <p>Have a project in mind</p>
            <h3>Let me help you</h3>
            <Button btnLink='/Contact' btnText='Contact Now' outline={false}/>
        </STYLEDIV>
    )
}

const STYLEDIV = styled.div`
    max-width:1200px;
    width:100%;
    background:#1E1E1E;
    margin:0 auto;
    border-radius: 20px;
    text-align:center;
    padding:1rem;
    margin-bottom:2rem;
    p{
        margin-bottom:1rem;
    }
`;

export default ContactButton;