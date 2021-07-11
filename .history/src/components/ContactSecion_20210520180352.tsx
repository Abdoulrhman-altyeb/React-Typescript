import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md'
import Button from './Button';

const ContactSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='contact' semiTitle='get in touch' />
                <div className="contact-me">
                    <div className="contact-info">
                        <div className="phone">
                            <div className="icon">
                                <FaPhone/>
                            </div>
                            <span> +122878567</span>
                        </div>
                        <div className="mail">
                            <div className="icon">
                                <IoMdMail/>
                            </div>
                            <span>Wizardman0008@gmail.com</span>
                        </div>
                        <div className="location">
                            <div className="icon">
                                <MdLocationOn/>
                            </div>
                            <span>Khartoum, Bahry</span>
                        </div>
                    </div>
                    <div className="linebetween"></div>
                    <form className='form-contact'>
                        <label htmlFor="name">Your name</label>
                        <input className='name' type="text" id='name' />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" />
                        <label htmlFor="message">Your message</label>
                        <textarea id="message"></textarea>
                        <button type='submit' className='btn'>
                                <Button btnLink='/'  outline={false} btnText='Send'/>;
                        </button>
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
    .contact-me{
        padding:3rem 0;
        display: flex;
        gap:6rem;
    }
    .contact-info{
        flex:1;
    }
    .phone,
    .mail,
    .location{
        width:100%;
        background:#1E1E1E;
        margin-top:1rem;
        padding:1rem;
        border-radius:12px;
        display: flex;
        align-items: center;
    }
    .icon{
        width:70px;
        height:70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-right:2rem;
        background:#262626;
    }
    .icon svg{
        width:50%;
        fill: #8c8484;
    }
    .linebetween{
        width:2px;
        height:300px;
        background:#8c8484;
        margin-top:2.5rem;
    }

    .form-contact{
        flex:1;
        display: flex;
        flex-direction:column;
        text-align:left;
    }
    .form-contact input, textarea{
        padding:1rem;
        background:#1E1E1E;
        border:none;
        border-radius:8px;
    }
    .form-contact textarea {
        height:250px;
    }
    .form-contact label{
        margin-bottom:0.7rem;
        color:lightgray;
    }
    .form-contact input{
        margin-bottom:1rem;
        outline:none;
        color:#8c8484;
        font-size:1.1rem;
    }
    .btn{
        background:transparent;
        outline:none;
        border:none
    }
`;

export default ContactSection;
