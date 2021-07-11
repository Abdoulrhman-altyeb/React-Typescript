import React from 'react';
import styled from 'styled-components';

const SectionsTitle:React.FC<SectionTitle> = ({title,semiTitle}) => {
    return (
        <StyledSectionTitle className='title'>
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
        font-size:3.8rem;
        font-family: 'Montserrat', sans-serif;
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