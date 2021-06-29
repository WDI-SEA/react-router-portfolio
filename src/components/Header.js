import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav id='nav'>
            <ul>
                <li>
                    <Link to='/'>Return to Homepage</Link>
                </li>

                <li>
                    <Link to='/about'>About Me</Link>
                </li>

                <li>
                    <Link to='/blog'>Blog List</Link>
                </li>

                <li>
                    <Link to='/projects'>Most Recent Project</Link>
                </li>
            </ul>
        </nav>
    )
}