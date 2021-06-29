import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <ul id='nav'>
                <li class='navList'>
                    <Link to='/'>Return to Homepage</Link>
                </li>

                <li class='navList'>
                    <Link to='/about'>About Me</Link>
                </li>

                <li class='navList'>
                    <Link to='/blog'>Blog List</Link>
                </li>

                <li class='navList'>
                    <Link to='/projects'>Most Recent Project</Link>
                </li>
            </ul>
        </nav>
    )
}