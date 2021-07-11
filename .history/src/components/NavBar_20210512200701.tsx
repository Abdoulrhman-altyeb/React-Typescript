import React, {useState} from 'react'


interface Props{

}


const NavBar: React.FC<Props> = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
            <nav>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            </nav>
        );
}


export default NavBar