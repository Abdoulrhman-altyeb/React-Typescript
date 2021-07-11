import React from 'react';
import hero from '../assits/images/hero.jpg';
import Button from './Button';
import PaText from './PaText';

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
                    <PaText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error id ipsa nobis eligendi iusto tempore, omnis eos dolorum quidem, assumenda accusantium praesentium, voluptas ex aspernatur consequatur sequi voluptatum laboriosam.</p>
                    </PaText>
                    <Button btnLink='/projects' btnText='See my Work' outline={true} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;