import React, { useState } from 'react';
import Services from '../assits/data/Services'

const ServicesSection: React.FC = () => {
    const [services] = useState(Services)
    return (
        <>
            {services.map((service) => (
                <ServiceItems />
            ))}
        </>
    )
}


export default ServicesSection;