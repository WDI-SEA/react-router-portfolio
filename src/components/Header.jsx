import React from 'react'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            {" | "}
            <Link to="/blog">Blog</Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/projects">Projects</Link>
        </nav>
    )
}
