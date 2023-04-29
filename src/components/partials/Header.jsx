import { Link } from "react-router-dom"
import Home from "../pages/Home"

export default function Header() {
    return (
        <div>
        <nav>
           <Link to='/'>Home</Link> {' | '}
           <Link to='/about'>About</Link> {' | '}
           <Link to='/projects'>Projects</Link> {' | '}
           <Link to='/blog'>Blog</Link> 
        </nav>
        </div>
    )
}