import React from 'react';
import styled from 'styled-components'

const FooterSection: React.FC = () => {
    return (
        <>
            <StyledDiv>
                <div className="container">

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