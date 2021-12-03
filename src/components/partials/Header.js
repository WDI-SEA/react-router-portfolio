import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/blog">Blog</Link></li>
                        <li className="nav-item"><Link to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link to="/about">About Devin</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
