import React from 'react';
import styled from 'styled-components';
import SectionsTitle from './SectionsTitle';

const ContactSection: React.FC = () => {
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle title='contact' semiTitle='get in touch' />
            </div>
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    padding:5rem 0;
`;

export default ContactSection;
