import React from 'react';
import styled from 'styled-components'
import PaText from './PaText';

const FooterSection: React.FC = () => {
    return (
        <>
            <StyledDiv>
                <div className="container">
                    <div className="info">
                        <h2>Abdulrhman</h2>
                        <PaText>
                            A freelance web designer and developer from Chittagong,
                            Bangladesh. I always make websites that have unique designs
                            and also has a good performance rate.
                        </PaText>
                    </div>
                </div>
            </StyledDiv>
            <StyledCopyright>
                <div className="container">
                    <p>© 2021 - allrights to Abdo  | Designed By Abdo</p>
                </div>
            </StyledCopyright>
        </>

    )
}

const StyledDiv = styled.div`
    background:#1E1E1E;
    padding:5rem 0 ;
    .container{
        display:flex;
    }
`;
const StyledCopyright = styled.div`
    background:#262626;
    padding:10px 0;
    p{
        font-size:1.2rem;
    }

    @media only screen and (max-width:768px) {
        p{
            font-size:0.9rem;
            width:100%;
        }
    }
`;

export default FooterSection