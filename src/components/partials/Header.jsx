import {Link} from "react-router-dom"

export default function Header() {
    return(
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">about</Link>
            {" | "}
            <Link to="/projects">projects</Link>
            {" | "}
            <Link to="/blog">blog</Link>
        </nav>

    )
}