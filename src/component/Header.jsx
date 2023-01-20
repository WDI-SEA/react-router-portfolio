import {Link} from 'react-router-dom'

export default function Header() {

    return (
        
        <div>
            <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/blog">Blog</Link>
            {" | "}
            <Link to="/projects">Projects</Link>
        </nav>
            
        </div>

    )
}