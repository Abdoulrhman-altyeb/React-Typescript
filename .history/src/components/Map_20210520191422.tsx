import React from 'react';
import map from '../assits/images/Capture.jpg'
const Map: React.FC = () => {
    return (
        <div>
            <img src={map} alt="" />
            <div className="location__details">
                <h2>Here is me</h2>
                <p>Khartoum, bahry, shambat, square15</p>
            </div>
        </div>
    )
}

export default Map;