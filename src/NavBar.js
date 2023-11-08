import { Link } from 'react-router-dom';
import test from './../src/test.jpg'

const NavBar = () =>{
    return (
        <nav className = ''style ={{backgroundImage: `url(${test})`}}>
            <ul>
                <li>
                    <Link to ="/" className='hover:italic'> Home</Link>
                </li>
                <li>
                    <Link to ="/about" className='hover:italic'>About</Link>
                </li>
                <li>
                    <Link to ="/characters" className='hover:italic'>Characters</Link>
                </li>
                <li>
                    <Link to ="/game" className='hover:italic'>Play!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;