import {Link} from 'react-router-dom'
import './Header.scss'

function Header() {
    return ( 
        <div className='nav-bar-top'>
        <nav>
            <Link to='/'><div className='nav-item'>Home</div></Link>
            <Link to='/about'><div className='nav-item'>About</div></Link>
            <Link to='/blog'><div className='nav-item'>Blog</div></Link>
            <Link to='/projects'><div className='nav-item'>Projects</div></Link>
        </nav>
        </div>
     );
}

export default Header;