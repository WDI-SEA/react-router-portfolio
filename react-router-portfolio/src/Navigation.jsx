import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/About'>About Page</Link>
                </li>

                <li>
                    <Link to='/Blog'>Blog Posts</Link>
                </li>

                <li>
                    <Link to='Projects'>Projects</Link>
                </li>

                <li>
                    <Link to='/'>Return to Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;