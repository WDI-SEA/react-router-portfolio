import { Link } from 'react-router-dom'

function Header() {
    return ( 
        <header>
          <nav>
            <h1>YoshBook</h1>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
    );
}

export default Header;