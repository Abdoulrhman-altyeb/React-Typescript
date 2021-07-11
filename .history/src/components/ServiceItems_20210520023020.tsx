import React from 'react';
import styled from 'styled-components';
import PaText from './PaText';

const ServiceItems: React.FC<ServicesProps> = ({ icon, title, description, id }) => {
    return (
        <StyledService>
            <div className="icon">
                <img src={icon} alt={title} />
            </div>
            <div className="title">
                {title}
            </div>
            <PaText>
                {description}
            </PaText>
        </StyledService>
    )
}

const StyledService = styled.div`
    color:#BCB4B4;
    flex:1;
    width:320px;
    .title{
        font-size:1.7rem;
    }
    .icon {
        width:40px;
        margin:auto;
    }
    .par {
        margin-top:1.5rem;
        font-size:1rem;
        word-spacing:3px;
    }
    @media only screen and (max-width:768px) {
        .par{
            font-size:0.9rem;
        }
    }
`;
export default ServiceItems;