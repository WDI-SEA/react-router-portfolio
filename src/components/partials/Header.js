import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About Devin</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
