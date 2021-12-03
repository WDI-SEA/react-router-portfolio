import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div class="nav-right">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </nav>
            </header>
        )
    }
}