import React, { useState } from 'react';
import styled from 'styled-components';
import Services from '../assits/data/Services'
import SectionsTitle from './SectionsTitle';
import ServiceItems from './ServiceItems';

const ServicesSection: React.FC = () => {
    const [services] = useState(Services)
    return (
        <StyledDiv>
            <SectionsTitle semiTitle='what i will do for you' title='Services'/>
            {services.map((service) => {
                const { title, id, description, icon } = service;
                return (
                    <ServiceItems key={id} title={title} description={description} icon={icon}/>
            
                )
            })}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
`;
export default ServicesSection;