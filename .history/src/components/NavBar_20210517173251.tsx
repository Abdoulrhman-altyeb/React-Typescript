import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'
const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <ul>
                <li>
                    <NavLink to='/'>
                     Home   
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>         
                </li>
                <li>
                    <NavLink to='projects'>
                        Projects
                    </NavLink>         
                </li>
                <li>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>         
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
    font-family: 'Roboto', sans-serif;
    width:100%;
    ul {
        list-style: none;
        width:90%;
        max-width:1200px;
        display:flex;
        justify-content:center;
        text-align:center;
        margin:0 auto;
    }
    li {
        cursor:pointer;
        
    }
    a {
        display:inline-block;
        text-decoration:none;
        color:#8c8484;
        padding:1rem 2rem;
    }
    .active {
        color:white;
    }
`;



export default NavBar;