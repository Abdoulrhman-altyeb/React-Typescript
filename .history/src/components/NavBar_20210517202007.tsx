import React,{useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BiMenu, BiX } from 'react-icons/bi';


const NavBar: React.FC = () => {

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <NavBarContainer>
            <div className="hamburgerMenu" onClick={() => setIsActive(!isActive)}>
                <BiMenu/>
            </div>
            <ul className={isActive ? 'ListItems' : 'ListItems hide-items'}>
                <div className='closeMenu' onClick={() => setIsActive(!isActive)}>
                    <BiX/>
                </div>
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
    z-index:100;
    top:0;
    left:0;
    background-color:#1E1E1E;
    font-family: 'Roboto', sans-serif;
    width:100%;
    border-radius:12px;
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

    .hamburgerMenu {
        font-size:2rem;
        position:absolute;
        top:1rem;
        right:1rem;
        color:white;
        display:none;
        * {
            pointer-events:none;
        }
    }
    .closeMenu{
        display:none;
    }
    @media only screen and (max-width:780px) {
        .hide-items{
            transform: translateY(calc(-100% - 1rem))
        }
        .hamburgerMenu{
            display:block;
        }
        .ListItems {
            width:80%;
            max-width:230px;
            position:absolute;
            top:1rem;
            right:1rem;
            background:#1E1E1E;
            padding:1rem;
            transition: 0.3s ease transform;
            
            .closeMenu {
                color:white;
                font-size:1.4rem;
                width:1rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                display:block;
                *{
                    pointer-events:none;
                }
            }
        }
        li {
            display:block;
            margin-bottom:1rem
        }
        a {
            padding:1rem;
        }
    }
`;



export default NavBar;