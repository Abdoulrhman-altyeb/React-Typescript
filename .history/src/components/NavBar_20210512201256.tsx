import React, {useState} from 'react'
import styled from 'styled-components';

interface Props{

}


const NavBar: React.FC<Props> = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
            <div className='container'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
}


const STYLEDDIV = styled.div`
    .contianer {
        width:100%;
        max-width:1300px;
        background:blue
    }
`;

export default NavBar