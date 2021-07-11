import React from 'react';
import styled from 'styled-components';
import PaText from './PaText';
import { Link } from 'react-router-dom';

const FooterSection: React.FC = () => {
    return (
        <>
            <StyledDiv>
                <div className="container">
                    <div className="info">
                        <h2>Abdulrhman</h2>
                        <PaText>
                            A freelance web designer and developer from Chittagong,
                            Bangladesh. I always make websites that have unique designs
                            and also has a good performance rate.
                        </PaText>
                    </div>
                    <div className="pages">
                        <h2>Important Links</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Projects</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_info">
                        <h2>Contact Info</h2>
                        <ul>
                            <li><p>+122878567</p></li>
                            <li><p>Wizardman0008@gmail.com</p></li>
                            <li><p>Sudan,<br>Khartoum,Bahry,Shambat</p></li>
                        </ul>
                    </div>
                </div>
            </StyledDiv>
            <StyledCopyright>
                <div className="container">
                    <p>© 2021 - allrights to Abdo  | Designed By Abdo</p>
                </div>
            </StyledCopyright>
        </>

    )
}

const StyledDiv = styled.div`
    background:#1E1E1E;
    padding:5rem 0 ;
    .container{
        display:flex;
    }
`;
const StyledCopyright = styled.div`
    background:#262626;
    padding:10px 0;
    p{
        font-size:1.2rem;
    }

    @media only screen and (max-width:768px) {
        p{
            font-size:0.9rem;
            width:100%;
        }
    }
`;

export default FooterSection