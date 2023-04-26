import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About Me</Link>
                </li>
                
                <li>
                    <Link to="/blog">The Blog</Link>
                </li>

                <li>
                    <Link to="/projects">My Projects</Link>
                </li>
            </ul>
        </nav>
    )
}