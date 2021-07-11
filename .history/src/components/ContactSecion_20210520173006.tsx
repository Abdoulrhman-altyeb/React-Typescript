import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ContactSection: React.FC = () => {
    return (
        <div>
            <div className="container">
                <SectionsTitle title='contact' semiTitle='get in touch' />
            </div>
        </div>
    )
}
const StyledDiv = styled.div`
    padding:10rem 0;
`;

export default ContactSection;
