import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className="linkStyle"
                        activeClassName="clickedLink"
                        exact> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blog"
                        className="linkStyle"
                        activeClassName="clickedLink"
                        exact> Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="linkStyle"
                        activeClassName="clickedLink"
                        exact> About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className="linkStyle"
                        activeClassName="clickedLink"
                        exact> Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}