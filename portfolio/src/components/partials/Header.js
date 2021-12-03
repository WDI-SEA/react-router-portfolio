import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <Link to='/' ><h2>Cory Sorel</h2></Link>
                </div>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/about"><li>About Me</li></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}