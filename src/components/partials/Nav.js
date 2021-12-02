import { Component } from "react"
import { Link } from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}