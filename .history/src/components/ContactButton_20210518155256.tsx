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

`;

export default ContactButton;