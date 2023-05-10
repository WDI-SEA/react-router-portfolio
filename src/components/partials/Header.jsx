import { Link } from "react-router-dom"
import Home from "../pages/Home"
import "./Header.css"
import blogimg from "../assets/blogicon.png"

export default function Header() {
    return (
        <div className="header-container">
            <div className="icon-img-name">
                Dakotas Blog
                <img className="icon" src={blogimg} alt="type writer icon" />
            </div>

            <nav className="nav-bar">
                <Link to='/'>Home</Link> {' | '}
                <Link to='/about'>About</Link> {' | '}
                <Link to='/projects'>Projects</Link> {' | '}
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    )
}