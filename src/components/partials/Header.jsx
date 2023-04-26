import { Link } from "react-router-dom"
import Home from "../pages/Home"

export default function Header() {
    return (
        <div>
            <h1>{<Home />}</h1>
        <nav>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/blog'>Blog</Link>
                </li>

                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}