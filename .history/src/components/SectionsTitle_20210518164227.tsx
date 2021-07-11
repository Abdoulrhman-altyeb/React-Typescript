import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.div`
    P{
        font-size:1.5rem;
    }
    h2{
        font-size:4rem;
        font-family: 'Montserrat', sans-serif;
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
            <h2>{title}</h2>
        </StyledSectionTitle>
    )
}

export default SectionsTitle;