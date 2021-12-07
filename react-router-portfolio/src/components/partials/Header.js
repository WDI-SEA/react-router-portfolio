import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header