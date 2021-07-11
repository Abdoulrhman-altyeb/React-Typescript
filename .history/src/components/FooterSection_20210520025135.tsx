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
                    <h2>© 2021 - Ayan Khan | Designed By web cifar</h2>
                </div>
            </StyledCopyright>
        </>

    )
}

const StyledDiv = styled.div`
    background:#1E1E1E;
    padding:5rem 0 ;
`;
const StyledCopyright = styled.div`
    background:#262626;
    
`;

export default FooterSection