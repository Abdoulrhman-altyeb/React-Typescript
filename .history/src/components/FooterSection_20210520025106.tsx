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
                <div className="container">
                    <h1>This is the copy right space</h1>
                </div>
            </StyledCopyright>
        </>

    )
}

const StyledDiv = styled.div`
    background:#1E1E1E;
    padding:2rem 0 ;
`;
const StyledCopyright = styled.div`
    background:#262626;
    
`;

export default FooterSection