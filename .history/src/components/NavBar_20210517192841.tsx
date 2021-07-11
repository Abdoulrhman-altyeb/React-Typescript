import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import {CgMenu } from 'react-icons'
const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <div className="hamburgerMenu">
                <CgMenu/>
            </div>
            <ul className='ListItems'>
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
        justify-content:center;
        text-align:center;
        margin:0 auto;
        padding:0;
    }
    li {
        display:inline-block;
        cursor:pointer;
    }
    a {
        display:inline-block;
        text-decoration:none;
        padding:1rem 2rem;  
        color:#8c8484;
        transition:0.3s ease color;
        /* &:hover {
            color:#726f6f;
        } */
    }
    .active {
        color:white;
    }
    @media only screen and (max-width:780px) {
        .ListItems {
            width:80%;
            max-width:230px;
            position:absolute;
            top:1rem;
            right:1rem;
            background:#262626;
            padding:1rem;
        }
        li {
            display:block;
        }
        a {
            padding:1rem;
        }
    }
`;



export default NavBar;