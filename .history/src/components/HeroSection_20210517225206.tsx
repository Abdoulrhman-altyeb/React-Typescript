import React from 'react';
import hero from '../assits/images/hero.jpg'
const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="container"> 
                    <h1 className="hero__header">
                        <span>This is me</span>
                        <span>Abdulrhman</span>
                    </h1>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
                <div className="hero__info">

                </div>
            </div>
        </div>
    )
}

export default HeroSection;