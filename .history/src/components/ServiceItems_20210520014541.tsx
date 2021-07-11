import React from 'react';

const ServiceItems: React.FC<ServicesProps> = ({icon,title,description,id}) => {
    return (
        <div>
            <div className="icon">
                <h1>icon</h1>
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default ServiceItems;