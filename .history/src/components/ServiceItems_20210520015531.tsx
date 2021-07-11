import React from 'react';
import styled from 'styled-components';
import PaText from './PaText';

const ServiceItems: React.FC<ServicesProps> = ({icon,title,description,id}) => {
    return (
        <StyledService>
            <div className="icon">
                <h1>icon</h1>
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
    .title{
        font-size:2rem;
    }
    .par {
        margin-top:1.5rem;
        width:250px;
        font-size:1.2rem;
    }
`;
export default ServiceItems;