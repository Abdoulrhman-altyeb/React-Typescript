import React from 'react';
import Button from './Button';
import PaText from './PaText';
import { BsArrowDown } from 'react-icons/bs';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import styled from 'styled-components';
import me from '../assits/images/Me.jpg';
const HeroSection: React.FC = () => {
    return (
        <STYLEDHERO>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__header">
                        <span>Hello, this is</span>
                        <span className='hero__name'>Abdulrhman</span>
                    </h1>
                    <div className="hero__img">
                        <img src={me} alt="" />
                    </div>
                    <div className="hero__info">
                        <PaText>
                            <h3>A fontend developer with eyes of a designer and a programmer</h3>
                        </PaText>
                        <Button btnLink='/projects' btnText='See my Work' outline={false} />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indcator">
                            <p>Follow</p>
                            <BsArrowDown className='icon'/>
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a href="https://facebook.com" rel='noreferrer'>FB</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" rel='noreferrer'>TW</a>
                                </li>
                                <li>
                                    <a href="https://youtube.com" rel='noreferrer'>YU</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scroll">
                        <p>Scroll</p>
                        <HiOutlineArrowNarrowDown className='icon'/>
                    </div>
                </div>
            </div>
        </STYLEDHERO>
    )
}


const STYLEDHERO = styled.div`
    .hero {
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
        text-align:center;
        width:100%;
        min-height:1000px;
        height:100vh;
    }
    .hero__header {
        margin-bottom:-2rem;
        position:relative;
        font-size:2rem;
        span{
            display:inline-block;
            width:100%;
            font-size:1.4rem;
        }
        .hero__name{
            font-size:3.5rem;
            font-family: 'Montserrat', sans-serif;
            font-style:italic;
            color:white;
        }
    }
    .hero__img {
        border:2px solid lightgray;
        max-width:800px;
        width:100%;
        height:600px;
        margin:0 auto;
        
    }
    .hero__info {
        margin-top:-15rem;
    }
    .btn{
        margin-top:1rem;
    }
    .par{
        p{
            font-size:1.1rem;
        }
    }
    .hero__social,
    .hero__scroll{
        display:flex;
        flex-direction:column;
        width:50px;
        position:absolute;
        bottom:20px;
        gap:2rem;
    }
    .hero__social{
        left:50px;
    }
    .hero__scroll{
        right:50px;
    }
    .icon {
        color:gray;
        min-height:45px;
        width:3rem;
        object-fit:content;
        align-self:center;
    }
    .hero__social{
        p{
            transform:rotate(90deg) translateX(-100px);
            letter-spacing:0.7rem;
            text-transform:uppercase
        }
    }
    .hero__scroll{
        p{
            transform:rotate(90deg) translateX(-80px);
            letter-spacing:0.7rem;
            text-transform:uppercase
        }
    }
    .hero__social__text{
        li {
            margin-bottom:1rem;
        }
        a{
            transform:rotate(-90deg);
            display:inline-block;
            font-size:1.05rem;
            letter-spacing:5px;
            margin-bottom:1rem;  
        }
    }
    @media only screen and (max-width:768px) {
        .hero {
            min-height:750px;
        }
        .hero__header{
            margin-bottom:-2rem;
            font-size:1.4rem;
            .hero__name{
                font-size:3rem;
            }
        }
        .hero__img{
            height:300px;
        }
        .hero__info{
            margin-top:3rem;
        }
        .hero__social,
        .hero__scroll{
            width:25px;
            bottom:-30px;
            font-size:0.9rem;
            P{
                letter-spacing:0.5rem;
                transform:translateY(-20px) rotate(90deg)
            }
            a{
                letter-spacing:2px;
            }
        }
        .hero__social {
            gap:1rem;
            P{
                transform:translateY(-60px) rotate(90deg)
            }
        }
        .hero__social {
            left:0;
            bottom:-20%;
        }
        .hero__scroll{
            right:0;
        }
        .hero__social__text {
            a{
                margin-bottom:1rem;
                font-size:1rem;
            }
        }
        .icon{
            width:25px;
            min-height:80px;
            align-self:center;
        }
    }
`;
export default HeroSection;