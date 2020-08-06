import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default Navbar => {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">JIMMY GRANADINO //</a>
                <div class="navbar-nav mr-auto">
                    <Link class="nav-item nav-link" to="/">Home</Link>
                    <Link class="nav-item nav-link" to="/about">About</Link>
                    <Link class="nav-item nav-link" to="/blog">Blog</Link>
                    <Link class="nav-item nav-link" to="/projects">Projects</Link>
                </div>
            </nav>
        );
}