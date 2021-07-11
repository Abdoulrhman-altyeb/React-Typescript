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
                <SectionsTitle semiTitle='what i will do for you' title='Services' />
                <div className="services-container">
                    {services.map((service) => {
                        const { title, id, description, icon } = service;
                        return (
                            <ServiceItems key={id} title={title} description={description} icon={icon}/>
                    
                        )
                    })}
                </div>
            </div>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    font-family: 'Roboto Mono', monospace;
    padding:10rem 0;
    .container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    }
    .title{
        p{
            font-size:1.3rem;
        }
        h2{
            font-size:3.8rem;
        }
    }
    .services-container{
        display:flex;
        margin-top:4rem;
        flex-direction:row;
        gap:10rem;
    }
    @media only screen and (max-width:768px) {
        .services-container{
            flex-direction:column;
            gap:3rem;
            align-items:center;
        }
        .title{
            p{
                font-size:0.9rem;
            }
            h2{
                font-size:2.5rem;
                margin-top:0;
            }
        }
    }
`;
export default ServicesSection;