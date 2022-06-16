import { Link } from 'react-router-dom'
function Header() {
    return (
      <>
      <h1>Portfolio</h1>
      <nav>
          <Link to='/'>Home</Link>{' | '}
          <Link to='/blog'>Blog</Link>{' | '}
          <Link to='/about'>About</Link>{' | '}
          <Link to='/projects'>Projects</Link>
      </nav>
      </>
    );
  }
  
  export default Header;