import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/"></Link>Home</li>
                        <li><Link to="/blog"></Link>Blog</li>
                        <li><Link to="/projects"></Link>Projects</li>
                        <li><Link to="/about"></Link>About</li>
                    </ul>
                </nav>
            </header>
        )
    }
}