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
                    <Link to='projects'>
                        Projects
                    </Link>         
                </li>
                <li>
                    <Link to='contact'>
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
    ul {
        list-style: none;
        width:90%;
        max-width:1200px;
        display:flex;
        justify-content:center;
    }
    li {
        
    }
`;



export default NavBar;