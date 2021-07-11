import React from 'react';
import styled from 'styled-components';
import map from '../assits/images/Capture.jpg'
const Map: React.FC = () => {
    return (
        <StyleDiv>
            <div className="image">
                <img src={map} alt="" />
                <div className="cover"></div>
            </div>
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
    .image{
        height:350px;
        width:100%;
        filter: grayscale(100%);
        background:linear-gradient(grba(0,0,0,0.8),rgba(0,0,0,0.8));
        .cover{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:black;
            opacity:0.6;
        }
    }
    .location__details{
        position: absolute;
        width:300px;
        background:#1E1E1E;
        border-radius:10px;
        padding:1rem;
        bottom:0.5  rem;
        left:57%;
        color:#BCB4B4;
        h2{
            font-size:1.9rem;
        }
        P{
            font-size:1.1rem;
            margin-top:1rem;
        }
        a{
            text-decoration:underline;
            font-size:1.1rem;
            margin-top:2rem;
            display:inline-block;
        }
    }
`;
export default Map;