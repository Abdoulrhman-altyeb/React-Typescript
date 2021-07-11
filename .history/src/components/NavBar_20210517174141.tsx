import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <ul>
                <li>
                    <NavLink to='/' exact>
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
        flex-wrap:wrap;
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
        padding:1rem 2rem;
        color:#8c8484;
        transition:0.3s ease color;
        &:hover {
            color:#726f6f;
        }
    }
    .active {
        color:white;
    }
`;



export default NavBar;