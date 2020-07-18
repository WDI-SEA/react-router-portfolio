import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Welcome from './Welcome.js';
import About from './About.js';
import Projects from './Projects.js';
import Blog from './Blog.js';

const Nav = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/projects">Projects</Link> | 
                <Link to="/blog">Blog</Link>
                <Route exact path="/" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
            </nav>
        </Router>
    )
}

export default Nav;