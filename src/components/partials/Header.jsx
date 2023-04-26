import { Link } from "react-router-dom";

export default function Header() {

    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
            </ul>
        </nav>
    )
}