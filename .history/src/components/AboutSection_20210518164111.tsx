import React from 'react';
import SectionsTitle from './SectionsTitle';

const AboutSection: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="aboutsection__left">
                    <SectionsTitle title='about me' semiTitle='let me introduce myself'/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;