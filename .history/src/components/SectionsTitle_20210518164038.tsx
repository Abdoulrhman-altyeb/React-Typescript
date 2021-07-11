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
    @media only screen and (max-width:768px){
        p{
            font-size:1rem;
        }
        h2{
            font-size:2rem;
        }
    }
`;
const SectionsTitle:React.FC<SectionTitle> = ({title,semiTitle}) => {
    return (
        <StyledSectionTitle>
            <p>{semiTitle}</p>
            <h2>This is the section Title</h2>
        </StyledSectionTitle>
    )
}

export default SectionsTitle;