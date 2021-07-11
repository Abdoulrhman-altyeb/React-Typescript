import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ContactSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='contact' semiTitle='get in touch' />
                <div className="contact-me">
                    <div className="contact-info">
                        <div className="phone">
                            <div className="icon">
                                icon
                            </div>
                            +122878567
                        </div>
                        <div className="mail">
                            <div className="icon">
                                icon
                            </div>
                            Wizardman0008@gmail.com
                        </div>
                        <div className="location">
                            <div className="icon">
                                icon
                            </div>
                            Khartoum, Bahry
                        </div>
                    </div>
                    <div className="linebetween"></div>
                    <form className='form-contact'>
                        <label htmlFor="name">Your name</label>
                        <input className='name' type="text" id='name' />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="message">Your message</label>
                        <textarea id="message" cols:number|string="50" rows="10"></textarea>
                    </form>
                </div>
            </div>
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    padding:5rem 0;
    text-align: center;
    .container{
        display: flex;
        flex-direction:column; 
    }
    .title{
        p{
            font-size:1.3rem;
        }
        h2{
            font-size:3.8rem;
            margin-top:0;
        }
    }
`;

export default ContactSection;
