import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link>{' • '}
                    <Link to="/projects">Projects</Link>{' • '}
                    <Link to="/blog">Blog</Link>{' • '}
                    <Link to="/about">About</Link>
                </nav>
            </header>
        )
    }
}

export default Header