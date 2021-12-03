import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Project">Project</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}