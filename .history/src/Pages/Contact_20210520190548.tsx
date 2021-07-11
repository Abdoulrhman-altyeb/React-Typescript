import React from 'react';
import ContactSection from '../components/ContactSecion';
import FooterSection from '../components/FooterSection';

const Contact: React.FC = () => {
    return (
        <>
            <ContactSection/>
            <FooterSection />
            <Map/>
        </>
    )
}

export default Contact;