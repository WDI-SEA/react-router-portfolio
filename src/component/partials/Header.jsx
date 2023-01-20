import {Link} from 'react-router-dom'

function Header() {
    return ( 
        <>
        <nav>
        <Link to='/'>Home</Link> {' | '}
        <Link to='/about'>About</Link>{' | '}
        <Link to='/blog'>Blog</Link>{' | '}
        <Link to='/projects'>Projects</Link>
        </nav>
        </>
     );
}

export default Header;