import React, { useState } from 'react';
import Services from '../assits/data/Services'

const ServicesSection: React.FC = () => {
    const [service, setService ] = useState(Services)
    return (
        <h1>This is Services Section</h1>
    )
}


export default ServicesSection;