import React from 'react';
import hero from '../assits/images/hero.jpg'
const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="hero__header">
                    <h1>
                        <span>This is me</span>
                        <span>Abdulrhman</span>
                    </h1>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;