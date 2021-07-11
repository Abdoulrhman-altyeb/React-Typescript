import React from 'react';
import PaText from './PaText';

const ServiceItems: React.FC<ServicesProps> = ({icon,title,description,id}) => {
    return (
        <div>
            <div className="icon">
                <h1>icon</h1>
            </div>
            <div className="title">
                {title}
            </div>
            <PaText>
                {description}
            </PaText>
        </div>
    )
}

export default ServiceItems;