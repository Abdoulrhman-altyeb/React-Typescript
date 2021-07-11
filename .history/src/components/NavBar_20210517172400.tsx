import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <ul>
                <li>
                    <Link to='/'>
                     Home   
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>         
                </li>
                <li>
                    <Link to='Projects'>
                        Projects
                    </Link>         
                </li>
                <li>
                    <Link to='Contact'>
                        Contact
                    </Link>         
                </li>
            </ul>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    position: absolute;
    top:0;
    left:0;
    background-color:#262626;
    width:100%;
`;



export default NavBar;