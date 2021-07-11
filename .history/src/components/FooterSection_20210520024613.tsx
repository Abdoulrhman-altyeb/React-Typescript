import React from 'react';
import styled from 'styled-components'

const FooterSection: React.FC = () => {
    return (
        <StyledDiv>
            <h1>This is the footer section</h1>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    background:#1E1E1E
`;

export default FooterSection