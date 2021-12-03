import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <img class="logo" src=""></img>
                <nav>
                    <ul className="nav_links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <a class="resume" href="#"><button>Resume</button></a>
            </header>
        )
    }
}