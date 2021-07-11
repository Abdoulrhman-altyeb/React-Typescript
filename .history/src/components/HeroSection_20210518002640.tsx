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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error id ipsa nobis eligendi iusto tempore, omnis eos dolorum quidem, assumenda accusantium praesentium, voluptas ex aspernatur consequatur sequi voluptatum laboriosam.</p>
                        </PaText>
                        <Button btnLink='/projects' btnText='See my Work' outline={true} />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indcator">
                            <p>Follow</p>
                            {/* <BsArrowDown className='icon'/> */}
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
                        {/* <HiOutlineArrowNarrowDown/> */}
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
`;
export default HeroSection;