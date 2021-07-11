import React from 'react';
import hero from '../assits/images/hero.jpg';
import Button from './Button';
import PaText from './PaText';
import { BsArrowDown } from 'react-icons/bs';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import styled from 'styled-components';

const HeroSection: React.FC = () => {
    return (
        <STYLEDHERO>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__header">
                        <span>This is me</span>
                        <span className='hero__name'>Abdulrhman</span>
                    </h1>
                    <div className="hero__img">
                        <img src={hero} alt="" />
                    </div>
                    <div className="hero__info">
                        <PaText>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolore facere sunt praesentium exercitationem voluptates labore necessitatibus. Nam, quam id.</p>
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
                        <HiOutlineArrowNarrowDown className='down'/>
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
        margin-bottom:-3rem;
        position:relative;
        font-size:2rem;
        span{
            display:inline-block;
            width:100%;
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
        margin-top:-12rem;
    }
    .hero__social,
    .hero__scroll{
        display:flex;
        flex-direction:column;
        bottom:20px;
        gap:2rem;
        position:absolute;
        width:50px;
    }
    .hero__social{
        left:50px;
    }
    /* .hero__scroll{
        right:50px;
        letter-spacing:0.7rem;
        p{
            transform:rotate(90deg);
        }
        .down{
            color:#8c8484;
        }
    } */
    .hero__social__indcator,
    .hero__scroll{
        width:
        letter-spacing:0.7rem;
        .icon{
            transform:rotate(90deg) translateY(-70px);
        }
    }
`;
export default HeroSection;