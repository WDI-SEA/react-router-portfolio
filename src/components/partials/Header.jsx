import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" onClick={() => props.handlePageChange("bg-grey")}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={() => props.handlePageChange("bg-pink")}>About</Link>
                </li>
                <li>
                    <Link to="/blog" onClick={() => props.handlePageChange("bg-purple")}>Blog</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => props.handlePageChange("bg-dark-green")}>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}