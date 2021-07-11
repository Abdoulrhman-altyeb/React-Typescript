import React from 'react';
import Button from './Button';
import PaText from './PaText';
import SectionsTitle from './SectionsTitle';
import about from '../assits/images/about.jpg'

const AboutSection: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="aboutsection__left">
                    <SectionsTitle title='about me' semiTitle='let me introduce myself' className='section-title'/>
                    <PaText>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore pariatur sint soluta! Nesciunt fugiat reiciendis excepturi dolorum quisquam temporibus!</p>
                    </PaText>
                    <div className="aboutsection__buttons">
                        <Button outline={false} btnLink='/projects' btnText='Works'/>
                        <Button outline={false} btnLink='/about' btnText='Read More'/>
                    </div>
                </div>
                <div className="aboutsecction__left">
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;