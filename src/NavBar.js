import { Link } from 'react-router-dom';
import test from './../src/test.jpg'

const NavBar = () =>{
    return (
        <nav className = '' style ={{backgroundImage: `url(${test})`}}>
            <ul>
                <li className='mx-24'>
                    <Link to ="/" className='hover:italic '> Home</Link>
                </li>
                <li className='mx-24'>
                    <Link to ="/about" className='hover:italic '>About</Link>
                </li>
                <li className='mx-24'>
                    <Link to ="/characters" className='hover:italic'>Characters</Link>
                </li>
                <li className='mx-24'>
                    <Link to ="/game" className='hover:italic'>Play!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;