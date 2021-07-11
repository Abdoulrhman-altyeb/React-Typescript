import React, { useState } from 'react';
import styled from 'styled-components';
import Services from '../assits/data/Services'
import SectionsTitle from './SectionsTitle';
import ServiceItems from './ServiceItems';

const ServicesSection: React.FC = () => {
    const [services] = useState(Services)
    return (
        <StyledDiv>
            <div className="container">
                <SectionsTitle semiTitle='what i will do for you' title='Services'/>
                {services.map((service) => {
                    const { title, id, description, icon } = service;
                    return (
                        <ServiceItems key={id} title={title} description={description} icon={icon}/>
                
                    )
                })}
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    .container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    }
`;
export default ServicesSection;