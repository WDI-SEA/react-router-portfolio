import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar container">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">About Me</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/blog" className="nav-link">The Blog</Link>
                </li>

                <li className="nav-item">
                    <Link to="/projects" className="nav-link">My Projects</Link>
                </li>
            </ul>
        </nav>
    )
}