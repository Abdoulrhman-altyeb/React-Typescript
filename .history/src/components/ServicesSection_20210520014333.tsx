import React, { useState } from 'react';
import Services from '../assits/data/Services'
import ServiceItems from './ServiceItems';

const ServicesSection: React.FC = () => {
    const [services] = useState(Services)
    return (
        <div>
            {services.map((service) => {
                const { title, id, description, icon } = service;
                return (
                    <ServiceItems key={id} title={title} description={description} icon={icon}/>
            
                )
            })}
        </div>
    )
}


export default ServicesSection;