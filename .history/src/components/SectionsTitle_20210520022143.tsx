import React from 'react';
import styled from 'styled-components';

const SectionsTitle:React.FC<SectionTitle> = ({title,semiTitle}) => {
    return (
        <StyledSectionTitle>
            <p>{semiTitle}</p>
            <h2>{title}</h2>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div`
    P{
        font-size:1.5rem;
    }
    h2{
        font-size:4rem;
        font-family: 'Roboto Condensed', sans-serif;
        text-transform:uppercase;
        margin-top:0.7rem;
        color:lightgray;
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

export default SectionsTitle;