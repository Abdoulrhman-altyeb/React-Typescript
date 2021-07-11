import React from 'react';
import ContactSection from '../components/ContactSecion';
import FooterSection from '../components/FooterSection';
import Map from '../components/Map';

const Contact: React.FC = () => {
    return (
        <>
            <ContactSection/>
            <Map/>
            <FooterSection />
        </>
    )
}

export default Contact;