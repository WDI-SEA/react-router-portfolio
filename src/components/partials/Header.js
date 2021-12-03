import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                        <Link className="navLink" to="/">Home</Link>
                        <Link className="navLink" to="/blog">Blog</Link>
                        <Link className="navLink" to="/about">About</Link>
                        <Link className="navLink" to="/projects">Projects</Link>
                </nav>
            </header>
        )
    }
}

export default Header