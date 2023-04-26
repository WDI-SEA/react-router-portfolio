import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/about' >About Me</Link>
            </li>
            <li>
                <Link to='/projects' >My Projects</Link>
            </li>
            <li>
                <Link to='/blog' >Blog</Link>
            </li>
        </ul>
    )
}