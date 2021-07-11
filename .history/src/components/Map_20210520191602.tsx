import React from 'react';
import styled from 'styled-components';
import map from '../assits/images/Capture.jpg'
const Map: React.FC = () => {
    return (
        <StyleDiv>
            <img src={map} alt="" />
            <div className="location__details">
                <h2>Here is me</h2>
                <p>Khartoum, bahry, shambat, square15</p>
                <a href="https://www.google.com/maps/place/%D9%85%D8%AD%D8%B7%D9%87+15%E2%80%AD/@15.6677097,32.5462023,17z/data=!4m13!1m7!3m6!1s0x168e8da4c6682f5f:0x213cdd630f5e6fa9!2sShambat+Bridge,+Khartoum+North,+Sudan!3b1!8m2!3d15.6434242!4d32.5089219!3m4!1s0x168e93f8f47bbcb9:0x5df02e7d5dd85537!8m2!3d15.6681869!4d32.5468858" rel='noreferrer'>open in google maps</a>
            </div>
        </StyleDiv>
    )
}

const StyleDiv = styled.div`
    position: relative;
    height:8rem;
`;
export default Map;