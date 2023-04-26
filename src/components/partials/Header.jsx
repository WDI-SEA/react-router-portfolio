import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='Header'>
            <nav className="navBar">
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/about">About</Link></h3>
                <h3><Link to="/blog">Blog</Link></h3>
                <h3><Link to="/projects">Projects</Link></h3>
            </nav>
        </div>
    );
}
