import { Link } from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav className='text-3xl color:green'>
            <ul>
                <li>
                    <Link to ="/"> Home</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/characters">Characters</Link>
                </li>
                <li>
                    <Link to ="/game">Play!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;