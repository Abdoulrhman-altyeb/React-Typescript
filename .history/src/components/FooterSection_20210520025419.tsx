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
                    <p>© 2021 - all rights reserved to Abdulrhman  | Designed By Abdulrhman</p>
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
`;

export default FooterSection