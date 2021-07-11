import React from 'react';
import styled from 'styled-components'

const FooterSection: React.FC = () => {
    return (
        <>
            <StyledDiv>
                <div className="container">
                <h1>This is the contact me space</h1>
                </div>
            </StyledDiv>
            <StyledCopyright>
                
            </StyledCopyright>
        </>

    )
}

const StyledDiv = styled.div`
    background:#1E1E1E;
    padding:2rem 0 ;
`;
const StyledCopyright = styled.div`

`;

export default FooterSection