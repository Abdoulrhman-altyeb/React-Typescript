import React, {useState} from 'react'
import styled from 'styled-components';

interface Props{

}


const NavBar: React.FC<Props> = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
            <STYLEDDIV>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </STYLEDDIV>
        );
}


const STYLEDDIV = styled.div`
    width:100%;
    max-width:1300px;
    background:blue;

`;

export default NavBar