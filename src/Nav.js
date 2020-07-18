import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/projects">Projects</Link> | 
            <Link to="/blog">Blog</Link>
        </nav>
    )
}

export default Nav;