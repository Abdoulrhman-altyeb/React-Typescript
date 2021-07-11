import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const ContactButton: React.FC = () => {
    return (
        <STYLEDIV>
            <div className="container">
                <p>Have a project in mind</p>
                <h3>Let me help you</h3>
                <Button btnLink='/Contact' btnText='Contact Now' outline={false}/>
            </div>
        </STYLEDIV>
    )
}

const STYLEDIV = styled.div`
    width:100%;
    background:red;
    margin-bottom:2rem;

    .container {
        max-width:1200px;
        margin:0 auto;
        border-radius: 12px;
        padding:3rem 0;
        text-align:center;
    }
    p{
        font-size:1.2rem;
        word-spacing:10px;
    }
    h3{
        font-size:3rem;
    }

    @media only screen and(max-width:768px){
        h3{
            font-size:2rem;
        }
    }
`;

export default ContactButton;