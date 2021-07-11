import React from 'react';
import styled from 'styled-components'

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const NavBarContainer = styled.nav`
    position: absolute;
    top:0;
    left:0;
    background-color:#262626;
`;



export default NavBar;