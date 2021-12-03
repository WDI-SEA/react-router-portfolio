import { Link } from 'react-router-dom';
import '../../Styles/Header.scss';

function Header() {
  return (
    <header className='container'>
      <div className='container-inner'>
        <div className='container-logo'>Logo Here</div>
        <nav className='container-links'>
          <Link className='container-links-link' to='/'>
            Home
          </Link>
          {' | '}
          <Link className='container-links-link' to='/blog'>
            Blog
          </Link>
          {' | '}
          <Link className='container-links-link' to='/projects'>
            Projects
          </Link>
          {' | '}
          <Link className='container-links-link' to='/about'>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
