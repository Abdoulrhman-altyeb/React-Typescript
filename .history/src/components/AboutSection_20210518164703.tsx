import React from 'react';
import PaText from './PaText';
import SectionsTitle from './SectionsTitle';

const AboutSection: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="aboutsection__left">
                    <SectionsTitle title='about me' semiTitle='let me introduce myself' className='section-title'/>
                </div>
                <PaText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore pariatur sint soluta! Nesciunt fugiat reiciendis excepturi dolorum quisquam temporibus!
                </PaText>
            </div>
        </div>
    )
}

export default AboutSection;