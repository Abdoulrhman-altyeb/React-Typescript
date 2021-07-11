import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.div`
    P{
        font-size:1.2rem;
    }
    h2{
        font-size:3rem;
        text-transform:uppercase;
    }
`;
const SectionsTitle:React.FC = () => {
    return (
        <StyledSectionTitle>
            <p>This is the semiTitl</p>
            <h2>This is the section Title</h2>
        </StyledSectionTitle>
    )
}

export default SectionsTitle;