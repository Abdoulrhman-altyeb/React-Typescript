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


export default NavBar